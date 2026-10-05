import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';

import { StyleStoriesService } from './style-stories.service';
import { CreateStyleStoryDto } from './dto/create-style-story.dto';
import { UpdateStyleStoryStatusDto } from './dto/update-style-story-status.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('style-stories')
export class StyleStoriesController {
  constructor(private readonly styleStoriesService: StyleStoriesService) {}

  // =========================================================
  // PUBLIC - ALL APPROVED STORIES
  // =========================================================

  @Get()
  findApproved() {
    return this.styleStoriesService.findApproved();
  }

  // =========================================================
  // PUBLIC - FEATURED STORIES
  // =========================================================

  @Get('featured')
  findFeatured() {
    return this.styleStoriesService.findFeatured();
  }

  // =========================================================
  // PUBLIC - STORIES FOR ONE PRODUCT
  // =========================================================

  @Get('product/:productId')
  findByProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.styleStoriesService.findByProduct(productId);
  }

  // =========================================================
  // CUSTOMER - UPLOAD IMAGE
  // =========================================================

  @UseGuards(JwtAuthGuard)
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

    return this.styleStoriesService.uploadImage({
      buffer: file.buffer,
      mimetype: file.mimetype,
    });
  }

  // =========================================================
  // CUSTOMER - UPLOAD VIDEO
  // =========================================================

  @UseGuards(JwtAuthGuard)
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

    return this.styleStoriesService.uploadVideo({
      buffer: file.buffer,
      mimetype: file.mimetype,
    });
  }

  // =========================================================
  // CUSTOMER - CREATE STYLE STORY
  // =========================================================

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Req()
    req: Request & {
      user?: {
        sub?: number;
      };
    },
    @Body() dto: CreateStyleStoryDto,
  ) {
    const userId = Number(req.user?.sub);

    return this.styleStoriesService.create(userId, dto);
  }

  // =========================================================
  // CUSTOMER - MY STORIES
  // =========================================================

  @UseGuards(JwtAuthGuard)
  @Get('my-stories')
  findMyStories(
    @Req()
    req: Request & {
      user?: {
        sub?: number;
      };
    },
  ) {
    const userId = Number(req.user?.sub);

    return this.styleStoriesService.findMyStories(userId);
  }

  // =========================================================
  // ADMIN - ALL STORIES
  // =========================================================

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('admin/all')
  findAllForAdmin() {
    return this.styleStoriesService.findAllForAdmin();
  }

  // =========================================================
  // ADMIN - APPROVE / REJECT / FEATURE
  // =========================================================

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch('admin/:id')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStyleStoryStatusDto,
  ) {
    return this.styleStoriesService.updateStatus(id, dto);
  }

  // =========================================================
  // ADMIN - DELETE STORY
  // =========================================================

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('admin/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.styleStoriesService.remove(id);
  }
}
