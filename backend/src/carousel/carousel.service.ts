import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryService } from '../products/cloudinary.service';

@Injectable()
export class CarouselService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  // ==========================================
  // GET ACTIVE CAROUSEL IMAGES
  // PUBLIC
  // GET /carousel
  // ==========================================

  async getActiveImages() {
    return this.prisma.carouselImage.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        sortOrder: 'asc',
      },
    });
  }

  // ==========================================
  // GET ALL CAROUSEL IMAGES
  // ADMIN
  // GET /carousel/admin
  // ==========================================

  async getAllImages() {
    return this.prisma.carouselImage.findMany({
      orderBy: {
        sortOrder: 'asc',
      },
    });
  }

  // ==========================================
  // UPLOAD CAROUSEL IMAGE
  // ADMIN
  // POST /carousel/upload
  //
  // Uploads image to Cloudinary
  // Then saves Cloudinary URL in PostgreSQL
  // ==========================================

  async uploadImage(
    file: {
      buffer: Buffer;
      mimetype: string;
    },
    data: {
      altText?: string;
      sortOrder?: string | number;
      isActive?: string | boolean;
    },
  ) {
    if (!file) {
      throw new BadRequestException('Carousel image is required.');
    }

    if (!file.mimetype.startsWith('image/')) {
      throw new BadRequestException('Only image files are allowed.');
    }

    // ==========================================
    // UPLOAD TO CLOUDINARY
    // ==========================================

    const uploaded = await this.cloudinaryService.uploadCarouselImage(file);

    if (!uploaded.secure_url) {
      throw new BadRequestException('Cloudinary did not return an image URL.');
    }

    // ==========================================
    // NORMALIZE VALUES
    // ==========================================

    const sortOrder = Number(data.sortOrder ?? 0);

    let isActive = true;

    if (data.isActive !== undefined) {
      if (typeof data.isActive === 'boolean') {
        isActive = data.isActive;
      } else {
        isActive = data.isActive === 'true' || data.isActive === '1';
      }
    }

    // ==========================================
    // SAVE TO DATABASE
    // ==========================================

    return this.prisma.carouselImage.create({
      data: {
        url: uploaded.secure_url,
        altText: data.altText?.trim() || null,
        sortOrder,
        isActive,
      },
    });
  }

  // ==========================================
  // CREATE CAROUSEL IMAGE
  // ADMIN
  // POST /carousel
  //
  // Kept for existing URL-based records
  // ==========================================

  async createImage(data: {
    url: string;
    altText?: string;
    sortOrder?: number;
    isActive?: boolean;
  }) {
    if (!data.url || !data.url.trim()) {
      throw new BadRequestException('Image URL is required.');
    }

    return this.prisma.carouselImage.create({
      data: {
        url: data.url.trim(),
        altText: data.altText?.trim() || null,
        sortOrder: Number(data.sortOrder ?? 0),
        isActive: data.isActive ?? true,
      },
    });
  }

  // ==========================================
  // UPDATE CAROUSEL IMAGE
  // ADMIN
  // PATCH /carousel/:id
  // ==========================================

  async updateImage(
    id: number,
    data: {
      url?: string;
      altText?: string;
      sortOrder?: number;
      isActive?: boolean;
    },
  ) {
    const existing = await this.prisma.carouselImage.findUnique({
      where: {
        id,
      },
    });

    if (!existing) {
      throw new NotFoundException('Carousel image not found.');
    }

    return this.prisma.carouselImage.update({
      where: {
        id,
      },
      data: {
        ...(data.url !== undefined && {
          url: data.url.trim(),
        }),

        ...(data.altText !== undefined && {
          altText: data.altText.trim() || null,
        }),

        ...(data.sortOrder !== undefined && {
          sortOrder: Number(data.sortOrder),
        }),

        ...(data.isActive !== undefined && {
          isActive: Boolean(data.isActive),
        }),
      },
    });
  }

  // ==========================================
  // DELETE CAROUSEL IMAGE
  // ADMIN
  // DELETE /carousel/:id
  // ==========================================

  async deleteImage(id: number) {
    const existing = await this.prisma.carouselImage.findUnique({
      where: {
        id,
      },
    });

    if (!existing) {
      throw new NotFoundException('Carousel image not found.');
    }

    await this.prisma.carouselImage.delete({
      where: {
        id,
      },
    });

    return {
      success: true,
      message: 'Carousel image deleted successfully.',
    };
  }
}
