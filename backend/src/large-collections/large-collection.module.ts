import { Module } from '@nestjs/common';

import { LargeCollectionController } from './large-collection.controller';
import { LargeCollectionService } from './large-collection.service';

import { PrismaModule } from '../prisma/prisma.module';
import { CloudinaryService } from '../products/cloudinary.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [LargeCollectionController],
  providers: [LargeCollectionService, CloudinaryService],
})
export class LargeCollectionModule {}
