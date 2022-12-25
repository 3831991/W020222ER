import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Contact } from "./contact.entity";

@Injectable()
export class ContactService {

    async getContacts() {
        return await this.rep.find();
    }

    async addContact(item: Contact) {
        return await this.rep.save(item);
    }

    async complete(id: number) {
        const item = await this.rep.findOne({ where: { id } });
        item.isCompleted = true;
        this.rep.save(item);
    }

    async undo(id: number) {
        const item = await this.rep.findOne({ where: { id } });
        item.isCompleted = false;
        this.rep.save(item);
    }

    async removeContact(id: number) {
        return await this.rep.delete(id);
    }

    constructor(
        @InjectRepository(Contact)
        private rep: Repository<Contact>
    ) { }
}