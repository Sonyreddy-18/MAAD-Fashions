import {
  BadRequestException,
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
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { LargeCollectionService } from './large-collection.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('large-collections')
export class LargeCollectionController {
  constructor(
    private readonly largeCollectionService: LargeCollectionService,
  ) {}

  // PUBLIC

  @Get()
  async getActiveImages() {
    return this.largeCollectionService.getActiveImages();
  }

  // ADMIN

  @Get('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async getAllImages() {
    return this.largeCollectionService.getAllImages();
  }

  // UPLOAD

  @Post('upload')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body()
    body: {
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

    return this.largeCollectionService.uploadImage(file, body);
  }

  // CREATE

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async createImage(
    @Body()
    body: {
      url: string;
      eyebrow?: string;
      title: string;
      subtitle?: string;
      altText?: string;
      link?: string;
      sortOrder?: number;
      isActive?: boolean;
    },
  ) {
    return this.largeCollectionService.createImage(body);
  }

  // UPDATE

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async updateImage(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: {
      url?: string;
      eyebrow?: string;
      title?: string;
      subtitle?: string;
      altText?: string;
      link?: string;
      sortOrder?: number;
      isActive?: boolean;
    },
  ) {
    return this.largeCollectionService.updateImage(id, body);
  }

  // DELETE

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async deleteImage(@Param('id', ParseIntPipe) id: number) {
    return this.largeCollectionService.deleteImage(id);
  }
}
