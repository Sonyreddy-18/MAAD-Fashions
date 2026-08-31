import {
  Controller,
  Get,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';

import type { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CustomOrdersService } from './custom-orders.service';

@Controller('custom-orders')
export class CustomOrdersController {
  constructor(private readonly customOrdersService: CustomOrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('my-orders')
  async getMyCustomOrders(@Req() req: Request) {
    const user = req.user as {
      id?: number;
      sub?: number;
    };

    const userId = user?.id ?? user?.sub;

    if (!userId) {
      throw new UnauthorizedException('Please login first.');
    }

    return this.customOrdersService.getMyCustomOrders(Number(userId));
  }
}
