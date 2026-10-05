import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async createContact(data: { name: string; email: string; message: string }) {
    return this.prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
  }

  async getAllContacts() {
    return this.prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getContactById(id: number) {
    return this.prisma.contactMessage.findUnique({
      where: {
        id,
      },
    });
  }

  async deleteContact(id: number) {
    return this.prisma.contactMessage.delete({
      where: {
        id,
      },
    });
  }
}
