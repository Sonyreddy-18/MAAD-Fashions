import { Controller, Get, Req, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  // ==========================================
  // ADMIN DASHBOARD
  // ==========================================

  @Get('dashboard')
  @Roles('ADMIN')
  dashboard(@Req() req: any) {
    return {
      success: true,
      message: 'Welcome to the MAAD Fashions admin dashboard',

      admin: {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
      },
    };
  }
}
