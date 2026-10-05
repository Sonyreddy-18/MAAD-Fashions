import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StallsService {
  constructor(private readonly prisma: PrismaService) {}

  // Get the currently active stall for the Home page
  async getActiveStall() {
    return this.prisma.stall.findFirst({
      where: {
        isActive: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
  }

  // Admin: get all stalls
  async getAllStalls() {
    return this.prisma.stall.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // Admin: create a stall
  async createStall(data: {
    date: string;
    fullDate: string;
    time: string;
    location: string;
    isActive?: boolean;
  }) {
    if (!data.date || !data.fullDate || !data.time || !data.location) {
      throw new BadRequestException(
        'Date, full date, time and location are required.',
      );
    }

    // Only one stall should normally be active.
    // If this stall is being activated, deactivate existing stalls first.
    if (data.isActive !== false) {
      await this.prisma.stall.updateMany({
        where: {
          isActive: true,
        },
        data: {
          isActive: false,
        },
      });
    }

    return this.prisma.stall.create({
      data: {
        date: data.date,
        fullDate: data.fullDate,
        time: data.time,
        location: data.location,
        isActive: data.isActive ?? true,
      },
    });
  }

  // Admin: update a stall
  async updateStall(
    id: number,
    data: {
      date?: string;
      fullDate?: string;
      time?: string;
      location?: string;
      isActive?: boolean;
    },
  ) {
    const existingStall = await this.prisma.stall.findUnique({
      where: { id },
    });

    if (!existingStall) {
      throw new NotFoundException('Stall not found.');
    }

    // If activating this stall,
    // deactivate all other active stalls.
    if (data.isActive === true) {
      await this.prisma.stall.updateMany({
        where: {
          isActive: true,
          id: {
            not: id,
          },
        },
        data: {
          isActive: false,
        },
      });
    }

    return this.prisma.stall.update({
      where: { id },
      data: {
        ...(data.date !== undefined && {
          date: data.date,
        }),

        ...(data.fullDate !== undefined && {
          fullDate: data.fullDate,
        }),

        ...(data.time !== undefined && {
          time: data.time,
        }),

        ...(data.location !== undefined && {
          location: data.location,
        }),

        ...(data.isActive !== undefined && {
          isActive: data.isActive,
        }),
      },
    });
  }

  // Admin: delete a stall
  async deleteStall(id: number) {
    const existingStall = await this.prisma.stall.findUnique({
      where: { id },
    });

    if (!existingStall) {
      throw new NotFoundException('Stall not found.');
    }

    await this.prisma.stall.delete({
      where: { id },
    });

    return {
      success: true,
      message: 'Stall deleted successfully.',
    };
  }
}
