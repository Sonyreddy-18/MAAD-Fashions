import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryService } from '../products/cloudinary.service';

@Injectable()
export class LargeCollectionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  // PUBLIC

  async getActiveImages() {
    return this.prisma.largeCollectionImage.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        sortOrder: 'asc',
      },
    });
  }

  // ADMIN

  async getAllImages() {
    return this.prisma.largeCollectionImage.findMany({
      orderBy: {
        sortOrder: 'asc',
      },
    });
  }

  // UPLOAD

  async uploadImage(
    file: {
      buffer: Buffer;
      mimetype: string;
    },
    data: {
      eyebrow?: string;
      title?: string;
      subtitle?: string;
      altText?: string;
      link?: string;
      sortOrder?: string | number;
      isActive?: string | boolean;
    },
  ) {
    if (!file) {
      throw new BadRequestException('Large collection image is required.');
    }

    if (!file.mimetype.startsWith('image/')) {
      throw new BadRequestException('Only image files are allowed.');
    }

    if (!data.title || !data.title.trim()) {
      throw new BadRequestException('Large collection title is required.');
    }

    const uploaded =
      await this.cloudinaryService.uploadLargeCollectionImage(file);

    if (!uploaded.secure_url) {
      throw new BadRequestException('Cloudinary did not return an image URL.');
    }

    const sortOrder = Number(data.sortOrder ?? 0);

    let isActive = true;

    if (data.isActive !== undefined) {
      if (typeof data.isActive === 'boolean') {
        isActive = data.isActive;
      } else {
        isActive = data.isActive === 'true' || data.isActive === '1';
      }
    }

    return this.prisma.largeCollectionImage.create({
      data: {
        url: uploaded.secure_url,
        publicId: uploaded.public_id || null,
        eyebrow: data.eyebrow?.trim() || null,
        title: data.title.trim(),
        subtitle: data.subtitle?.trim() || null,
        altText: data.altText?.trim() || null,
        link: data.link?.trim() || null,
        sortOrder,
        isActive,
      },
    });
  }

  // CREATE

  async createImage(data: {
    url: string;
    eyebrow?: string;
    title: string;
    subtitle?: string;
    altText?: string;
    link?: string;
    sortOrder?: number;
    isActive?: boolean;
  }) {
    if (!data.url || !data.url.trim()) {
      throw new BadRequestException('Image URL is required.');
    }

    if (!data.title || !data.title.trim()) {
      throw new BadRequestException('Large collection title is required.');
    }

    return this.prisma.largeCollectionImage.create({
      data: {
        url: data.url.trim(),
        eyebrow: data.eyebrow?.trim() || null,
        title: data.title.trim(),
        subtitle: data.subtitle?.trim() || null,
        altText: data.altText?.trim() || null,
        link: data.link?.trim() || null,
        sortOrder: Number(data.sortOrder ?? 0),
        isActive: data.isActive ?? true,
      },
    });
  }

  // UPDATE

  async updateImage(
    id: number,
    data: {
      url?: string;
      eyebrow?: string;
      title?: string;
      subtitle?: string;
      altText?: string;
      link?: string;
      sortOrder?: number;
      isActive?: boolean | string;
    },
  ) {
    const existing = await this.prisma.largeCollectionImage.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException('Large collection image not found.');
    }

    let isActive: boolean | undefined;

    if (data.isActive !== undefined) {
      if (typeof data.isActive === 'boolean') {
        isActive = data.isActive;
      } else {
        isActive = data.isActive === 'true' || data.isActive === '1';
      }
    }

    return this.prisma.largeCollectionImage.update({
      where: { id },
      data: {
        ...(data.url !== undefined && {
          url: data.url.trim(),
        }),

        ...(data.eyebrow !== undefined && {
          eyebrow: data.eyebrow.trim() || null,
        }),

        ...(data.title !== undefined && {
          title: data.title.trim(),
        }),

        ...(data.subtitle !== undefined && {
          subtitle: data.subtitle.trim() || null,
        }),

        ...(data.altText !== undefined && {
          altText: data.altText.trim() || null,
        }),

        ...(data.link !== undefined && {
          link: data.link.trim() || null,
        }),

        ...(data.sortOrder !== undefined && {
          sortOrder: Number(data.sortOrder),
        }),

        ...(isActive !== undefined && {
          isActive,
        }),
      },
    });
  }

  // DELETE

  async deleteImage(id: number) {
    const existing = await this.prisma.largeCollectionImage.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException('Large collection image not found.');
    }

    await this.prisma.largeCollectionImage.delete({
      where: { id },
    });

    return {
      success: true,
      message: 'Large collection image deleted successfully.',
    };
  }
}
