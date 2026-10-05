import { Module } from '@nestjs/common';

import { StyleStoriesController } from './style-stories.controller';
import { StyleStoriesService } from './style-stories.service';

import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [PrismaModule, AuthModule, ProductsModule],

  controllers: [StyleStoriesController],

  providers: [StyleStoriesService],

  exports: [StyleStoriesService],
})
export class StyleStoriesModule {}
