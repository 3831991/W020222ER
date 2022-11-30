import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Client } from "./clients.entity";

@Injectable()
export class ClientsService {

    getAll() {
        return this.rep.find();
    }

    constructor(
        @InjectRepository(Client)
        private rep: Repository<Client>
    ) { }
}