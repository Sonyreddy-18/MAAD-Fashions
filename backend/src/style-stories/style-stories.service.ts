import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryService } from '../products/cloudinary.service';

@Injectable()
export class StyleStoriesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  // =========================================================
  // PUBLIC
  // =========================================================

  async findApproved() {
    return this.prisma.styleStory.findMany({
      where: {
        status: 'APPROVED',
      },

      include: {
        product: {
          include: {
            images: true,
          },
        },

        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findFeatured() {
    return this.prisma.styleStory.findMany({
      where: {
        status: 'APPROVED',
        featured: true,
      },

      include: {
        product: {
          include: {
            images: true,
          },
        },

        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByProduct(productId: number) {
    return this.prisma.styleStory.findMany({
      where: {
        productId,
        status: 'APPROVED',
      },

      include: {
        product: {
          include: {
            images: true,
          },
        },

        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // =========================================================
  // CUSTOMER - MY STORIES
  // =========================================================

  async findMyStories(userId: number) {
    return this.prisma.styleStory.findMany({
      where: {
        userId,
      },

      include: {
        product: {
          include: {
            images: true,
          },
        },
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // =========================================================
  // ADMIN
  // =========================================================

  async findAllForAdmin() {
    return this.prisma.styleStory.findMany({
      include: {
        product: {
          include: {
            images: true,
          },
        },

        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async updateStatus(id: number, dto: any) {
    const story = await this.prisma.styleStory.findUnique({
      where: {
        id,
      },
    });

    if (!story) {
      throw new NotFoundException('Style story not found');
    }

    return this.prisma.styleStory.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  async remove(id: number) {
    const story = await this.prisma.styleStory.findUnique({
      where: {
        id,
      },
    });

    if (!story) {
      throw new NotFoundException('Style story not found');
    }

    return this.prisma.styleStory.delete({
      where: {
        id,
      },
    });
  }

  // =========================================================
  // CUSTOMER - CREATE STYLE STORY
  // =========================================================

  async create(userId: number, dto: any) {
    if (!userId || Number.isNaN(userId)) {
      throw new ForbiddenException('You must be logged in.');
    }

    const productId = Number(dto.productId);

    if (!productId || Number.isNaN(productId)) {
      throw new BadRequestException('Product ID is required.');
    }

    // =======================================================
    // CHECK PURCHASE
    // =======================================================

    const purchasedProduct = await this.prisma.orderItem.findFirst({
      where: {
        productId,

        order: {
          is: {
            userId,
            status: 'DELIVERED',
          },
        },
      },
    });

    if (!purchasedProduct) {
      throw new ForbiddenException(
        'You can share a Style Story only for a delivered product you purchased.',
      );
    }

    // =======================================================
    // PREVENT DUPLICATE STORY
    // =======================================================

    const existingStory = await this.prisma.styleStory.findFirst({
      where: {
        userId,
        productId,
      },
    });

    if (existingStory) {
      throw new ConflictException(
        'You have already shared a Style Story for this product.',
      );
    }

    // =======================================================
    // CREATE STORY
    // =======================================================

    return this.prisma.styleStory.create({
      data: {
        ...dto,
        productId,
        userId,
        status: 'PENDING',
        featured: false,
      },

      include: {
        product: {
          include: {
            images: true,
          },
        },

        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  // =========================================================
  // CUSTOMER - UPLOAD IMAGE
  // =========================================================

  async uploadImage(data: { buffer: Buffer; mimetype: string }) {
    if (!data?.buffer) {
      throw new BadRequestException('Image file is required.');
    }

    const result = await this.cloudinaryService.uploadImage(data);

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      mediaType: 'IMAGE',
    };
  }

  // =========================================================
  // CUSTOMER - UPLOAD VIDEO
  // =========================================================

  async uploadVideo(data: { buffer: Buffer; mimetype: string }) {
    if (!data?.buffer) {
      throw new BadRequestException('Video file is required.');
    }

    const result = await this.cloudinaryService.uploadVideo(data);

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      mediaType: 'VIDEO',
    };
  }
}
