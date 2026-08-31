import {
  Controller,
  Get,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';

import type { Request } from 'express';

import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('my-orders')
  async getMyOrders(@Req() req: Request) {
    const user = req.user as {
      id?: number;
      sub?: number;
    };

    const userId = user?.id ?? user?.sub;

    if (!userId) {
      throw new UnauthorizedException('Please login first.');
    }

    return this.ordersService.getMyOrders(Number(userId));
  }
}
