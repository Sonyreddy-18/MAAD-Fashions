import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  // ==========================================
  // DASHBOARD STATS
  // ==========================================

  async getDashboardStats() {
    const [
      productsCount,
      ordersCount,
      customersCount,
      salesResult,
      orderStatusResult,
    ] = await Promise.all([
      // ----------------------------------------
      // TOTAL ACTIVE PRODUCTS
      // ----------------------------------------
      this.prisma.product.count({
        where: {
          isActive: true,
        },
      }),

      // ----------------------------------------
      // TOTAL ORDERS
      // ----------------------------------------
      this.prisma.order.count(),

      // ----------------------------------------
      // TOTAL CUSTOMERS
      // ----------------------------------------
      this.prisma.user.count({
        where: {
          role: 'CUSTOMER',
        },
      }),

      // ----------------------------------------
      // TOTAL SALES
      // ----------------------------------------
      // Only delivered orders are counted as sales.
      this.prisma.order.aggregate({
        _sum: {
          totalAmount: true,
        },
        where: {
          status: 'DELIVERED',
        },
      }),

      // ----------------------------------------
      // ORDER STATUS SUMMARY
      // ----------------------------------------
      this.prisma.order.groupBy({
        by: ['status'],
        _count: {
          _all: true,
        },
      }),
    ]);

    // ----------------------------------------
    // DEFAULT STATUS COUNTS
    // ----------------------------------------

    const orderSummary = {
      pending: 0,
      processing: 0,
      shipped: 0,
      delivered: 0,
      cancelled: 0,
    };

    // ----------------------------------------
    // CONVERT DATABASE STATUS COUNTS
    // ----------------------------------------

    for (const item of orderStatusResult) {
      const status = String(item.status).toUpperCase();

      if (status === 'PENDING') {
        orderSummary.pending = item._count._all;
      }

      // CONFIRMED + PROCESSING
      if (status === 'CONFIRMED' || status === 'PROCESSING') {
        orderSummary.processing += item._count._all;
      }

      if (status === 'SHIPPED') {
        orderSummary.shipped = item._count._all;
      }

      if (status === 'DELIVERED') {
        orderSummary.delivered = item._count._all;
      }

      if (status === 'CANCELLED') {
        orderSummary.cancelled = item._count._all;
      }
    }

    // ----------------------------------------
    // RETURN DASHBOARD DATA
    // ----------------------------------------

    return {
      products: productsCount,

      orders: ordersCount,

      customers: customersCount,

      totalSales: Number(salesResult._sum.totalAmount ?? 0),

      orderSummary,
    };
  }
}
