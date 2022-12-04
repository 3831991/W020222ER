import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Contact } from "./contact.entity";

@Injectable()
export class ContactService {

    getContacts() {
        return this.rep.find();
    }

    addContact(item: Contact) {
        return this.rep.save(item);
    }

    constructor(
        @InjectRepository(Contact)
        private rep: Repository<Contact>
    ) { }
}