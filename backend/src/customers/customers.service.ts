import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  // ============================================================
  // GET ALL CUSTOMERS
  // ============================================================

  async getAllCustomers() {
    return this.prisma.user.findMany({
      where: {
        role: 'CUSTOMER',
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createdAt: true,
        updatedAt: true,

        orders: {
          select: {
            id: true,
            orderNumber: true,
            status: true,
            totalAmount: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },

        _count: {
          select: {
            orders: true,
            customOrders: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // ============================================================
  // GET CUSTOMER BY ID
  // ============================================================

  async getCustomerById(id: number) {
    const customer = await this.prisma.user.findFirst({
      where: {
        id,
        role: 'CUSTOMER',
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createdAt: true,
        updatedAt: true,

        orders: {
          include: {
            items: {
              include: {
                product: {
                  include: {
                    images: true,
                  },
                },
              },
            },
            payment: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },

        customOrders: {
          include: {
            images: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },

        _count: {
          select: {
            orders: true,
            customOrders: true,
          },
        },
      },
    });

    if (!customer) {
      throw new NotFoundException('Customer not found.');
    }

    return customer;
  }
}
