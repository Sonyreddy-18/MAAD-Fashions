import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // =========================================================
  // GET ALL PRODUCTS
  // =========================================================
  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  // =========================================================
  // GET STANDALONE VIDEOS
  // =========================================================
  @Get('standalone-videos')
  async findStandaloneVideos() {
    return this.productsService.findStandaloneVideos();
  }

  // =========================================================
  // GET SINGLE PRODUCT
  // =========================================================
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // =========================================================
  // UPLOAD IMAGE
  // =========================================================
  @Post('upload-image')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        fileSize: 5 * 1024 * 1024,
      },

      fileFilter: (_req, file, callback) => {
        const allowedTypes = [
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/webp',
        ];

        if (!allowedTypes.includes(file.mimetype)) {
          return callback(
            new Error('Only JPG, PNG and WEBP images are allowed.'),
            false,
          );
        }

        callback(null, true);
      },
    }),
  )
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return {
        success: false,
        message: 'Image file is required.',
      };
    }

    return this.productsService.uploadImage({
      buffer: file.buffer,
      mimetype: file.mimetype,
    });
  }

  // =========================================================
  // UPLOAD VIDEO
  // =========================================================
  @Post('upload-video')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        fileSize: 50 * 1024 * 1024,
      },

      fileFilter: (_req, file, callback) => {
        const allowedTypes = [
          'video/mp4',
          'video/webm',
          'video/quicktime',
          'video/x-msvideo',
        ];

        if (!allowedTypes.includes(file.mimetype)) {
          return callback(
            new Error('Only MP4, WEBM, MOV and AVI videos are allowed.'),
            false,
          );
        }

        callback(null, true);
      },
    }),
  )
  async uploadVideo(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return {
        success: false,
        message: 'Video file is required.',
      };
    }

    return this.productsService.uploadVideo({
      buffer: file.buffer,
      mimetype: file.mimetype,
    });
  }

  // =========================================================
  // CREATE STANDALONE VIDEO
  // =========================================================
  @Post('standalone-video')
  async createStandaloneVideo(@Body() data: any) {
    return this.productsService.createStandaloneVideo(data);
  }

  // =========================================================
  // CREATE PRODUCT
  // =========================================================
  @Post()
  async create(@Body() data: any) {
    return this.productsService.create(data);
  }

  // =========================================================
  // UPDATE PRODUCT
  // =========================================================
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.productsService.update(id, data);
  }

  // =========================================================
  // DELETE STANDALONE VIDEO
  // =========================================================
  @Delete('standalone-videos/:id')
  async removeStandaloneVideo(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.removeStandaloneVideo(id);
  }

  // =========================================================
  // DELETE PRODUCT
  // =========================================================
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
