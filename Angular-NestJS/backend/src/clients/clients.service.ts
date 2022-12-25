import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Client } from "./clients.entity";

@Injectable()
export class ClientsService {

    getAll() {
        return this.rep.find();
    }

    getSingleClient(clientId: number) {
        return this.rep.findOne({ where: { id: clientId } });
    }

    addClient(client: Client) {
        client.id = null;
        client.createTime = new Date();

        return this.rep.save(client);
    }

    updateClient(client: Client) {
        return this.rep.save(client);
    }

    async favorite(id: number) {
        const item = await this.rep.findOne({ where: { id } });
        item.isFavorite = true;
        this.rep.save(item);
    }

    async unfavorite(id: number) {
        const item = await this.rep.findOne({ where: { id } });
        item.isFavorite = false;
        this.rep.save(item);
    }

    removeClientById(clientId: number) {
        this.rep.delete(clientId);
    }

    constructor(
        @InjectRepository(Client)
        private rep: Repository<Client>
    ) { }
}