import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { TryOnService } from './tryon.service';

@Controller('tryon')
export class TryOnController {
  constructor(private readonly tryOnService: TryOnService) {}

  @Post()
  @UseInterceptors(FileInterceptor('person'))
  async tryOn(
    @UploadedFile()
    person: Express.Multer.File,

    @Body('garmentUrl')
    garmentUrl: string,

    @Body('garmentCategory')
    garmentCategory: string,
  ) {
    if (!person) {
      throw new BadRequestException('Please upload a person image');
    }

    if (!garmentUrl) {
      throw new BadRequestException('Garment image is required');
    }

    const category = garmentCategory?.trim() || 'Frock';

    console.log('================================');
    console.log('MAAD TRY-ON REQUEST');
    console.log('Category:', category);
    console.log('================================');

    const result = await this.tryOnService.generateTryOn(
      person.buffer,
      garmentUrl,
      category,
    );

    return {
      success: true,
      imageUrl: result,
    };
  }
}
