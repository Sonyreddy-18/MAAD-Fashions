import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { CustomOrdersController } from './custom-orders.controller';
import { CustomOrdersService } from './custom-orders.service';

@Module({
  imports: [AuthModule],

  controllers: [CustomOrdersController],

  providers: [CustomOrdersService],
})
export class CustomOrdersModule {}
