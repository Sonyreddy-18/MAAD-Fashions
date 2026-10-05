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

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

import { CustomOrdersService } from './custom-orders.service';

@Controller('custom-orders')
export class CustomOrdersController {
  constructor(private readonly customOrdersService: CustomOrdersService) {}

  // =========================
  // CUSTOMER - MY ORDERS
  // =========================
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

  // =========================
  // CUSTOMER - CREATE ORDER
  // =========================
  @UseGuards(JwtAuthGuard)
  @Post()
  async createCustomOrder(
    @Req() req: Request,
    @Body()
    body: {
      description?: string;
      dressType?: string;
      fabric?: string;
      color?: string;
      size?: string;
      budget?: number;
      measurements?: Record<string, any>;
    },
  ) {
    const user = req.user as {
      id?: number;
      sub?: number;
    };

    const userId = user?.id ?? user?.sub;

    if (!userId) {
      throw new UnauthorizedException('Please login first.');
    }

    return this.customOrdersService.createCustomOrder(Number(userId), body);
  }

  // =========================
  // ADMIN - ALL CUSTOM ORDERS
  // =========================
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  async getAllCustomOrders() {
    return this.customOrdersService.getAllCustomOrders();
  }

  // =========================
  // ADMIN - SINGLE ORDER
  // =========================
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get(':id')
  async getCustomOrder(@Param('id', ParseIntPipe) id: number) {
    return this.customOrdersService.getCustomOrder(id);
  }

  // =========================
  // ADMIN - UPDATE STATUS
  // =========================
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id/status')
  async updateCustomOrderStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: string,
  ) {
    return this.customOrdersService.updateCustomOrderStatus(id, status);
  }
}
