import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomOrdersService {
  constructor(private readonly prisma: PrismaService) {}

  // =====================================================
  // CUSTOMER - GET MY CUSTOM ORDERS
  // =====================================================
  async getMyCustomOrders(userId: number) {
    return this.prisma.customOrder.findMany({
      where: {
        userId,
      },
      include: {
        images: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // =====================================================
  // CUSTOMER - CREATE CUSTOM ORDER
  // =====================================================
  async createCustomOrder(
    userId: number,
    data: {
      description?: string;
      dressType?: string;
      fabric?: string;
      color?: string;
      size?: string;
      budget?: number;
      measurements?: Record<string, any>;
    },
  ) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    if (!data.dressType && !data.description) {
      throw new BadRequestException('Please provide dress details.');
    }

    const orderNumber = `CUSTOM-${Date.now()}`;

    return this.prisma.customOrder.create({
      data: {
        orderNumber,
        userId,

        description: data.description || null,
        dressType: data.dressType || null,
        fabric: data.fabric || null,
        color: data.color || null,
        size: data.size || null,

        budget:
          data.budget !== undefined && data.budget !== null
            ? Number(data.budget)
            : undefined,

        measurements:
          data.measurements !== undefined ? data.measurements : undefined,

        status: 'PENDING',
      },

      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },

        images: true,
      },
    });
  }

  // =====================================================
  // ADMIN - GET ALL CUSTOM ORDERS
  // =====================================================
  async getAllCustomOrders() {
    return this.prisma.customOrder.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },

        images: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // =====================================================
  // ADMIN - GET SINGLE CUSTOM ORDER
  // =====================================================
  async getCustomOrder(id: number) {
    const customOrder = await this.prisma.customOrder.findUnique({
      where: {
        id,
      },

      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },

        images: true,
      },
    });

    if (!customOrder) {
      throw new NotFoundException('Custom order not found.');
    }

    return customOrder;
  }

  // =====================================================
  // ADMIN - UPDATE CUSTOM ORDER STATUS
  // =====================================================
  async updateCustomOrderStatus(id: number, status: string) {
    const allowedStatuses = [
      'PENDING',
      'REVIEWING',
      'ACCEPTED',
      'IN_PROGRESS',
      'COMPLETED',
      'CANCELLED',
    ];

    const normalizedStatus = String(status).toUpperCase();

    if (!allowedStatuses.includes(normalizedStatus)) {
      throw new BadRequestException('Invalid custom order status.');
    }

    const existingOrder = await this.prisma.customOrder.findUnique({
      where: {
        id,
      },
    });

    if (!existingOrder) {
      throw new NotFoundException('Custom order not found.');
    }

    return this.prisma.customOrder.update({
      where: {
        id,
      },

      data: {
        status: normalizedStatus as any,
      },

      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },

        images: true,
      },
    });
  }
}
