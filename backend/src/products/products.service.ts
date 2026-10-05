import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryService } from './cloudinary.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  // GET ALL PRODUCTS
  async findAll() {
    const products = await this.prisma.product.findMany({
      include: {
        images: {
          orderBy: {
            createdAt: 'asc',
          },
        },
        videos: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return products;
  }

  // GET SINGLE PRODUCT
  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        images: {
          orderBy: {
            createdAt: 'asc',
          },
        },
        videos: true,
      },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  // GET STANDALONE VIDEOS
  async findStandaloneVideos() {
    return this.prisma.productVideo.findMany({
      where: {
        productId: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // CREATE PRODUCT
  async create(data: any) {
    if (!data.name || !String(data.name).trim()) {
      throw new BadRequestException('Product name is required.');
    }

    if (!data.category || !String(data.category).trim()) {
      throw new BadRequestException('Product category is required.');
    }

    const price = Number(data.price);
    const stock = Number(data.stock ?? 0);

    if (!Number.isFinite(price) || price < 0) {
      throw new BadRequestException('Invalid product price.');
    }

    if (!Number.isInteger(stock) || stock < 0) {
      throw new BadRequestException('Invalid product stock.');
    }

    const category = String(data.category).trim();

    // KIDS / CUSTOM SUBCATEGORY
    const subCategory =
      (category === 'Kids Wear' || category === 'Customised') &&
      data.subCategory &&
      String(data.subCategory).trim()
        ? String(data.subCategory).trim()
        : null;

    // IMAGES
    let images: Array<{
      url: string;
      publicId: string | null;
      altText: string;
    }> = [];

    if (Array.isArray(data.images)) {
      images = data.images
        .filter((image) => image?.url && String(image.url).trim())
        .map((image) => ({
          url: String(image.url).trim(),
          publicId:
            image.publicId && String(image.publicId).trim()
              ? String(image.publicId).trim()
              : null,
          altText: String(data.name).trim(),
        }));
    }

    // BACKWARD COMPATIBILITY
    if (images.length === 0 && data.image && String(data.image).trim()) {
      images = [
        {
          url: String(data.image).trim(),
          publicId:
            data.publicId && String(data.publicId).trim()
              ? String(data.publicId).trim()
              : null,
          altText: String(data.name).trim(),
        },
      ];
    }

    // VIDEO
    const videoUrl =
      data.video && String(data.video).trim()
        ? String(data.video).trim()
        : null;

    const videoTitle =
      data.videoTitle && String(data.videoTitle).trim()
        ? String(data.videoTitle).trim()
        : null;

    // CREATE
    const product = await this.prisma.product.create({
      data: {
        name: String(data.name).trim(),

        description:
          data.description && String(data.description).trim()
            ? String(data.description).trim()
            : null,

        price,

        category,

        subCategory,

        stock,

        isActive: data.status !== 'Draft',

        images:
          images.length > 0
            ? {
                create: images,
              }
            : undefined,

        videos: videoUrl
          ? {
              create: [
                {
                  url: videoUrl,
                  title: videoTitle,
                },
              ],
            }
          : undefined,
      },

      include: {
        images: {
          orderBy: {
            createdAt: 'asc',
          },
        },
        videos: true,
      },
    });

    return product;
  }

  // UPDATE PRODUCT
  async update(id: number, data: any) {
    const existingProduct = await this.prisma.product.findUnique({
      where: { id },
      include: {
        images: {
          orderBy: {
            createdAt: 'asc',
          },
        },
        videos: true,
      },
    });

    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    if (!data.name || !String(data.name).trim()) {
      throw new BadRequestException('Product name is required.');
    }

    if (!data.category || !String(data.category).trim()) {
      throw new BadRequestException('Product category is required.');
    }

    const price = Number(data.price);
    const stock = Number(data.stock ?? 0);

    if (!Number.isFinite(price) || price < 0) {
      throw new BadRequestException('Invalid product price.');
    }

    if (!Number.isInteger(stock) || stock < 0) {
      throw new BadRequestException('Invalid product stock.');
    }

    const category = String(data.category).trim();

    // KIDS / CUSTOM SUBCATEGORY
    const subCategory =
      (category === 'Kids Wear' || category === 'Customised') &&
      data.subCategory &&
      String(data.subCategory).trim()
        ? String(data.subCategory).trim()
        : null;

    // UPDATE BASIC PRODUCT INFORMATION
    await this.prisma.product.update({
      where: { id },

      data: {
        name: String(data.name).trim(),

        description:
          data.description && String(data.description).trim()
            ? String(data.description).trim()
            : null,

        price,

        category,

        subCategory,

        stock,

        isActive: data.status !== 'Draft',
      },
    });

    // UPDATE IMAGES
    //
    // When images is supplied, it represents the complete
    // image collection for this product.
    //
    // The first image becomes the cover image because
    // findAll/findOne return images ordered by createdAt.

    if (Array.isArray(data.images)) {
      const images = data.images
        .filter((image) => image?.url && String(image.url).trim())
        .map((image) => ({
          url: String(image.url).trim(),

          publicId:
            image.publicId && String(image.publicId).trim()
              ? String(image.publicId).trim()
              : null,

          altText: String(data.name).trim(),

          productId: id,
        }));

      await this.prisma.productImage.deleteMany({
        where: {
          productId: id,
        },
      });

      if (images.length > 0) {
        await this.prisma.productImage.createMany({
          data: images,
        });
      }
    } else if (data.image && String(data.image).trim()) {
      // BACKWARD COMPATIBILITY

      const imageUrl = String(data.image).trim();

      const publicId =
        data.publicId && String(data.publicId).trim()
          ? String(data.publicId).trim()
          : null;

      if (existingProduct.images.length > 0) {
        await this.prisma.productImage.update({
          where: {
            id: existingProduct.images[0].id,
          },

          data: {
            url: imageUrl,
            publicId,
            altText: String(data.name).trim(),
          },
        });
      } else {
        await this.prisma.productImage.create({
          data: {
            url: imageUrl,
            publicId,
            altText: String(data.name).trim(),
            productId: id,
          },
        });
      }
    }

    // UPDATE PRODUCT VIDEO

    if (data.video && String(data.video).trim()) {
      const videoUrl = String(data.video).trim();

      const videoTitle =
        data.videoTitle && String(data.videoTitle).trim()
          ? String(data.videoTitle).trim()
          : null;

      await this.prisma.productVideo.deleteMany({
        where: {
          productId: id,
        },
      });

      await this.prisma.productVideo.create({
        data: {
          url: videoUrl,
          title: videoTitle,
          productId: id,
        },
      });
    }

    return this.findOne(id);
  }

  // DELETE PRODUCT
  async remove(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    await this.prisma.product.delete({
      where: { id },
    });

    return {
      success: true,
      message: 'Product deleted successfully',
    };
  }

  // UPLOAD IMAGE TO CLOUDINARY
  async uploadImage(file: { buffer: Buffer; mimetype: string }) {
    const result = await this.cloudinaryService.uploadImage(file);

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    };
  }

  // UPLOAD VIDEO TO CLOUDINARY
  async uploadVideo(file: { buffer: Buffer; mimetype: string }) {
    const result = await this.cloudinaryService.uploadVideo(file);

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    };
  }

  // CREATE STANDALONE VIDEO
  async createStandaloneVideo(data: any) {
    if (!data.title || !String(data.title).trim()) {
      throw new BadRequestException('Video title is required.');
    }

    if (!data.url || !String(data.url).trim()) {
      throw new BadRequestException('Video URL is required.');
    }

    const video = await this.prisma.productVideo.create({
      data: {
        title: String(data.title).trim(),
        url: String(data.url).trim(),
        productId: null,
      },
    });

    return video;
  }

  // DELETE STANDALONE VIDEO
  async removeStandaloneVideo(id: number) {
    const video = await this.prisma.productVideo.findUnique({
      where: { id },
    });

    if (!video) {
      throw new NotFoundException('Video not found');
    }

    if (video.productId !== null) {
      throw new BadRequestException('This video is attached to a product.');
    }

    await this.prisma.productVideo.delete({
      where: { id },
    });

    return {
      success: true,
      message: 'Standalone video deleted successfully.',
    };
  }
}
