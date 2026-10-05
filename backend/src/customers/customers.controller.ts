import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { CustomersService } from './customers.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('customers')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // ============================================================
  // GET ALL CUSTOMERS
  // ADMIN ONLY
  // ============================================================

  @Get()
  async getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

  // ============================================================
  // GET CUSTOMER BY ID
  // ADMIN ONLY
  // ============================================================

  @Get(':id')
  async getCustomerById(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.getCustomerById(id);
  }
}
