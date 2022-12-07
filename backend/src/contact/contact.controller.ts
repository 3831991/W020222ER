import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Contact } from "./contact.entity";
import { ContactService } from "./contact.service";

@Controller()
export class ContactController {

    @Get("contact/list")
    async getAllContacts() {
        return await this.contactService.getContacts();
    }

    @Post("contact")
    async addContact(@Body() item: Contact) {
        return await this.contactService.addContact(item);
    }

    @Put("contact/:id/complete")
    async complete(@Param('id', new ParseIntPipe()) contactId: number) {
        await this.contactService.complete(contactId);
    }

    @Put("contact/:id/undo")
    async undo(@Param('id', new ParseIntPipe()) contactId: number) {
        await this.contactService.undo(contactId);
    }

    @Delete("contact/:id")
    async delete(@Param('id', new ParseIntPipe()) contactId: number) {
        await this.contactService.removeContact(contactId);
    }

    constructor(private contactService: ContactService) { }
}
