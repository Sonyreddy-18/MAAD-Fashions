import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(
    @Inject(ContactService)
    private readonly contactService: ContactService,
  ) {}

  // CREATE CONTACT MESSAGE
  @Post()
  async createContact(
    @Body()
    body: {
      name: string;
      email: string;
      message: string;
    },
  ) {
    return this.contactService.createContact(body);
  }

  // GET ALL CONTACT MESSAGES
  @Get()
  async getAllContacts() {
    return this.contactService.getAllContacts();
  }

  // GET CONTACT MESSAGE BY ID
  @Get(':id')
  async getContactById(@Param('id', ParseIntPipe) id: number) {
    const contact = await this.contactService.getContactById(id);

    if (!contact) {
      throw new NotFoundException(`Contact message with ID ${id} not found`);
    }

    return contact;
  }

  // DELETE CONTACT MESSAGE
  @Delete(':id')
  async deleteContact(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.deleteContact(id);
  }
}
