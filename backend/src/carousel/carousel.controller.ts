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
  UseGuards,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { CarouselService } from './carousel.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { RolesGuard } from '../auth/guards/roles.guard';

import { Roles } from '../auth/decorators/roles.decorator';

@Controller('carousel')
export class CarouselController {
  constructor(private readonly carouselService: CarouselService) {}

  // ==========================================
  // PUBLIC
  // GET /carousel
  // ==========================================

  @Get()
  async getActiveImages() {
    return this.carouselService.getActiveImages();
  }

  // ==========================================
  // ADMIN
  // GET /carousel/admin
  // ==========================================

  @Get('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async getAllImages() {
    return this.carouselService.getAllImages();
  }

  // ==========================================
  // ADMIN
  // POST /carousel/upload
  // UPLOAD IMAGE TO CLOUDINARY + CREATE RECORD
  // ==========================================

  @Post('upload')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,

    @Body()
    body: {
      altText?: string;
      sortOrder?: string | number;
      isActive?: string | boolean;
    },
  ) {
    if (!file) {
      throw new BadRequestException('Carousel image is required');
    }

    if (!file.mimetype.startsWith('image/')) {
      throw new BadRequestException('Only image files are allowed');
    }

    return this.carouselService.uploadImage(file, {
      altText: body.altText,
      sortOrder: body.sortOrder,
      isActive: body.isActive,
    });
  }

  // ==========================================
  // ADMIN
  // POST /carousel
  //
  // KEEP THIS FOR EXISTING URL-BASED RECORDS
  // ==========================================

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async createImage(
    @Body()
    body: {
      url: string;
      altText?: string;
      sortOrder?: number;
      isActive?: boolean;
    },
  ) {
    return this.carouselService.createImage(body);
  }

  // ==========================================
  // ADMIN
  // PATCH /carousel/:id
  // ==========================================

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async updateImage(
    @Param('id', ParseIntPipe) id: number,

    @Body()
    body: {
      url?: string;
      altText?: string;
      sortOrder?: number;
      isActive?: boolean;
    },
  ) {
    return this.carouselService.updateImage(id, body);
  }

  // ==========================================
  // ADMIN
  // DELETE /carousel/:id
  // ==========================================

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async deleteImage(@Param('id', ParseIntPipe) id: number) {
    return this.carouselService.deleteImage(id);
  }
}
