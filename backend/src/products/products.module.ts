import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CloudinaryService } from './cloudinary.service';

import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],

  controllers: [ProductsController],

  providers: [ProductsService, CloudinaryService],

  exports: [CloudinaryService],
})
export class ProductsModule {}
