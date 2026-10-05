import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async createContact(
    @Body()
    body: {
      name: string;
      email: string;
      message: string;
    },
  ) {
    if (!body.name?.trim()) {
      return {
        success: false,
        message: 'Name is required',
      };
    }

    if (!body.email?.trim()) {
      return {
        success: false,
        message: 'Email is required',
      };
    }

    if (!body.message?.trim()) {
      return {
        success: false,
        message: 'Message is required',
      };
    }

    const contact = await this.contactService.createContact({
      name: body.name.trim(),
      email: body.email.trim(),
      message: body.message.trim(),
    });

    return {
      success: true,
      message: 'Your message has been sent successfully.',
      contact,
    };
  }

  @Get()
  async getAllContacts() {
    return this.contactService.getAllContacts();
  }

  @Get(':id')
  async getContact(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.getContactById(id);
  }

  @Delete(':id')
  async deleteContact(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.deleteContact(id);
  }
}
