import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { Contact } from "./contact.entity";
import { ContactService } from "./contact.service";

@Controller()
export class ContactController {

    @Get("contact/list")
    getAllContacts() {
        return this.contactService.getContacts();
    }

    @Put("complete/:id")
    complete() {
        
    }

    @Put("undo/:id")
    undo() {
        
    }

    @Post("contact")
    addContact(@Body() item: Contact) {
        return this.contactService.addContact(item);
    }

    constructor(private contactService: ContactService) { }
}
