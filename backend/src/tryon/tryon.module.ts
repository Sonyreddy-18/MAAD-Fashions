import { Module } from '@nestjs/common';

import { TryOnController } from './tryon.controller';
import { TryOnService } from './tryon.service';

@Module({
  controllers: [TryOnController],
  providers: [TryOnService],
})
export class TryOnModule {}
