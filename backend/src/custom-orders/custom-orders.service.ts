import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomOrdersService {
  constructor(private readonly prisma: PrismaService) {}

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
}
