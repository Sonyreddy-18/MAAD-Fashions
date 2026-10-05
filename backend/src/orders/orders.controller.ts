import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';

import type { Request } from 'express';

import { OrdersService } from './orders.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // ============================================================
  // CUSTOMER - CREATE ORDER
  // ============================================================

  @UseGuards(JwtAuthGuard)
  @Post()
  async createOrder(@Req() req: Request, @Body() data: any) {
    const user = req.user as {
      id?: number;
      sub?: number;
    };

    const userId = user?.id ?? user?.sub;

    if (!userId) {
      throw new UnauthorizedException('Please login first.');
    }

    return this.ordersService.createOrder(Number(userId), data);
  }

  // ============================================================
  // ADMIN - GET ALL ORDERS
  // Used by Admin Orders page
  // ============================================================

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  async getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  // ============================================================
  // CUSTOMER - GET LOGGED-IN CUSTOMER ORDERS
  // ============================================================

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

  // ============================================================
  // ADMIN - UPDATE ORDER STATUS
  // Used by Admin Orders page
  // ============================================================

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id/status')
  async updateOrderStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: string,
  ) {
    return this.ordersService.updateOrderStatus(id, status);
  }
}
