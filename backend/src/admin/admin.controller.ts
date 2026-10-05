import { Controller, Get, Req, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

import { AdminService } from './admin.service';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // ==========================================
  // ADMIN DASHBOARD
  // ==========================================

  @Get('dashboard')
  @Roles('ADMIN')
  async dashboard(@Req() req: any) {
    const stats = await this.adminService.getDashboardStats();

    return {
      success: true,

      message: 'Welcome to the MAAD Fashions admin dashboard',

      admin: {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
      },

      stats,
    };
  }
}
