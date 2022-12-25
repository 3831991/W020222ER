import { Controller } from "@nestjs/common";
import { Body, Post } from "@nestjs/common/decorators";
import { Contact } from "./contact.entity";
import { ContactService } from "./contact.service";

@Controller("contact")
export class ContactController {

    @Post()
    async addContact(@Body() item: Contact) {
        this.service.addContact(item);
    }

    constructor(private service: ContactService) {}
}