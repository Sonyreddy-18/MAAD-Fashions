import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { StallsService } from './stalls.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('stalls')
export class StallsController {
  constructor(private readonly stallsService: StallsService) {}

  // --------------------------------------------------
  // PUBLIC
  // Home page uses this
  // --------------------------------------------------

  @Get('active')
  async getActiveStall() {
    return this.stallsService.getActiveStall();
  }

  // --------------------------------------------------
  // ADMIN / OWNER
  // --------------------------------------------------

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  async getAllStalls() {
    return this.stallsService.getAllStalls();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  async createStall(
    @Body()
    body: {
      date: string;
      fullDate: string;
      time: string;
      location: string;
      isActive?: boolean;
    },
  ) {
    return this.stallsService.createStall(body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id')
  async updateStall(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: {
      date?: string;
      fullDate?: string;
      time?: string;
      location?: string;
      isActive?: boolean;
    },
  ) {
    return this.stallsService.updateStall(id, body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  async deleteStall(@Param('id', ParseIntPipe) id: number) {
    return this.stallsService.deleteStall(id);
  }
}
