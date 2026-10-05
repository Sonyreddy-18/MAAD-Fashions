import { Module } from '@nestjs/common';

import { CarouselController } from './carousel.controller';
import { CarouselService } from './carousel.service';

import { PrismaModule } from '../prisma/prisma.module';
import { CloudinaryService } from '../products/cloudinary.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [CarouselController],
  providers: [CarouselService, CloudinaryService],
})
export class CarouselModule {}
