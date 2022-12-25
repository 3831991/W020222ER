import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm/repository/Repository";
import { Contact } from "./contact.entity";

@Injectable()
export class ContactService {
    async addContact(item: Contact) {
        return await this.rep.save(item);
    }

    constructor(@InjectRepository(Contact) private rep: Repository<Contact>) {}
}