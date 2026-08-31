import { Module } from '@nestjs/common';

import { AdminController } from './admin.controller';
import { AuthModule } from '../auth/auth.module';
import { AdminService } from './admin.service';

@Module({
  imports: [AuthModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
