import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';

import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // ==========================================
  // REGISTER
  // ==========================================

  async register(registerDto: RegisterDto) {
    const { name, email, password, phone } = registerDto;

    const existingUser = await this.prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (existingUser) {
      throw new ConflictException('Email is already registered');
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await this.prisma.user.create({
      data: {
        name,
        email: email.trim().toLowerCase(),
        phone,
        passwordHash,
        role: 'CUSTOMER',
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    return {
      message: 'Customer registered successfully',
      user,
    };
  }

  // ==========================================
  // NORMAL LOGIN
  // Customers + Admins
  // ==========================================

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: {
        email: email.trim().toLowerCase(),
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      message: 'Login successful',
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    };
  }

  // ==========================================
  // ADMIN LOGIN
  // Only ADMIN users
  // ==========================================

  async adminLogin(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: {
        email: email.trim().toLowerCase(),
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid admin email or password');
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid admin email or password');
    }

    // IMPORTANT:
    // Only users with ADMIN role can use admin login
    if (user.role !== 'ADMIN') {
      throw new UnauthorizedException(
        'You do not have permission to access the admin panel',
      );
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      message: 'Admin login successful',
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    };
  }

  // ==========================================
  // FORGOT PASSWORD
  // ==========================================

  async forgotPassword(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email.trim().toLowerCase(),
      },
    });

    if (!user) {
      return {
        message:
          'If an account exists with this email, password reset instructions have been sent.',
      };
    }

    const resetToken = randomBytes(32).toString('hex');

    const resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000);

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExpires,
      },
    });

    return {
      message: 'Password reset request created successfully.',
      resetToken,
    };
  }

  // ==========================================
  // RESET PASSWORD
  // ==========================================

  async resetPassword(token: string, newPassword: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException(
        'Invalid or expired password reset token',
      );
    }

    const passwordHash = await bcrypt.hash(newPassword, 12);

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        passwordHash,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });

    return {
      message: 'Password has been reset successfully.',
    };
  }
  // ==========================================
  // CHANGE PASSWORD
  // ==========================================

  async changePassword(
    email: string,
    currentPassword: string,
    newPassword: string,
  ) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email.trim().toLowerCase(),
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const passwordMatches = await bcrypt.compare(
      currentPassword,
      user.passwordHash,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    if (!newPassword || newPassword.length < 6) {
      throw new UnauthorizedException(
        'New password must be at least 6 characters',
      );
    }

    const passwordHash = await bcrypt.hash(newPassword, 12);

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        passwordHash,
      },
    });

    return {
      message: 'Password changed successfully',
    };
  }
  async resetAdminPassword(email: string, newPassword: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email.trim().toLowerCase(),
      },
    });

    if (!user) {
      throw new UnauthorizedException('Admin account not found');
    }

    if (user.role !== 'ADMIN') {
      throw new UnauthorizedException('This account is not an admin');
    }

    const passwordHash = await bcrypt.hash(newPassword, 12);

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        passwordHash,
      },
    });

    return {
      message: 'Admin password reset successfully',
    };
  }
}
