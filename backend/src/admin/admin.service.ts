import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboardStats() {
    const [productsCount, ordersCount, customersCount, salesResult] =
      await Promise.all([
        // Total products
        this.prisma.product.count(),

        // Total orders
        this.prisma.order.count(),

        // Only customers, not admins
        this.prisma.user.count({
          where: {
            role: 'CUSTOMER',
          },
        }),

        // Total order value
        this.prisma.order.aggregate({
          _sum: {
            totalAmount: true,
          },
        }),
      ]);

    return {
      products: productsCount,
      orders: ordersCount,
      customers: customersCount,
      totalSales: salesResult._sum.totalAmount ?? 0,
    };
  }
}
