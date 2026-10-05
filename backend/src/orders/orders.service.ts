import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  // ============================================================
  // CREATE ORDER
  // ============================================================
  async createOrder(userId: number, data: any) {
    if (!data?.customer) {
      throw new BadRequestException('Customer details are required.');
    }

    if (!data?.items || !Array.isArray(data.items) || data.items.length === 0) {
      throw new BadRequestException('Order must contain at least one item.');
    }

    const customer = data.customer;

    if (
      !customer.name ||
      !customer.email ||
      !customer.phone ||
      !customer.address ||
      !customer.city ||
      !customer.state ||
      !customer.pincode
    ) {
      throw new BadRequestException('All delivery details are required.');
    }

    const paymentMethod = String(data.paymentMethod || 'cod').toUpperCase();

    const allowedPaymentMethods = ['COD', 'UPI', 'CARD', 'RAZORPAY'];

    if (!allowedPaymentMethods.includes(paymentMethod)) {
      throw new BadRequestException('Invalid payment method.');
    }

    // ----------------------------------------------------------
    // Check products and calculate the real total from database
    // ----------------------------------------------------------

    const productIds = data.items.map((item: any) => Number(item.id));

    const products = await this.prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    if (products.length !== productIds.length) {
      throw new BadRequestException('One or more products could not be found.');
    }

    let totalAmount = 0;

    const orderItems = data.items.map((item: any) => {
      const product = products.find((p) => p.id === Number(item.id));

      if (!product) {
        throw new BadRequestException(`Product ${item.id} not found.`);
      }

      const quantity = Number(item.quantity);

      if (!quantity || quantity < 1) {
        throw new BadRequestException(`Invalid quantity for ${product.name}.`);
      }

      const price = Number(product.price);

      totalAmount += price * quantity;

      return {
        productId: product.id,
        quantity,
        price,
      };
    });

    // ----------------------------------------------------------
    // Generate MAAD order number
    // ----------------------------------------------------------

    const orderNumber = `MAAD-${Date.now().toString().slice(-6)}`;

    // ----------------------------------------------------------
    // Payment status
    //
    // COD starts as PENDING.
    // Demo UPI/Card orders are marked PAID for now.
    // Razorpay can be changed later when real integration is added.
    // ----------------------------------------------------------

    let paymentStatus = 'PENDING';

    if (paymentMethod === 'UPI' || paymentMethod === 'CARD') {
      paymentStatus = 'PAID';
    }

    // ----------------------------------------------------------
    // Create Order + OrderItems + Payment
    // ----------------------------------------------------------

    const order = await this.prisma.order.create({
      data: {
        orderNumber,

        userId,

        status: 'PENDING',

        totalAmount,

        shippingName: customer.name,
        shippingPhone: customer.phone,
        shippingEmail: customer.email,

        address: customer.address,
        city: customer.city,
        state: customer.state,
        postalCode: customer.pincode,

        items: {
          create: orderItems,
        },

        payment: {
          create: {
            amount: totalAmount,
            method: paymentMethod as any,
            status: paymentStatus as any,
          },
        },
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
    });

    return order;
  }

  // ============================================================
  // GET ALL ORDERS
  // ============================================================
  async getAllOrders() {
    const orders = await this.prisma.order.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },

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
    });

    return orders;
  }

  // ============================================================
  // GET CUSTOMER ORDERS
  // ============================================================
  async getMyOrders(userId: number) {
    return this.prisma.order.findMany({
      where: {
        userId,
      },

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
    });
  }

  // ============================================================
  // UPDATE ORDER STATUS
  // ============================================================
  async updateOrderStatus(id: number, status: string) {
    const allowedStatuses = [
      'PENDING',
      'CONFIRMED',
      'PROCESSING',
      'SHIPPED',
      'DELIVERED',
      'CANCELLED',
    ];

    const normalizedStatus = String(status).toUpperCase();

    if (!allowedStatuses.includes(normalizedStatus)) {
      throw new BadRequestException('Invalid order status.');
    }

    const existingOrder = await this.prisma.order.findUnique({
      where: {
        id,
      },
    });

    if (!existingOrder) {
      throw new NotFoundException('Order not found.');
    }

    return this.prisma.order.update({
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
    });
  }
}
