import { Controller, Delete, Get, Param, ParseIntPipe } from "@nestjs/common";
import { ClientsService } from "./clients.service";

@Controller("clients")
export class ClientsController {

    @Get()
    getClients() {
        return this.clientsService.getAll();
    }

    @Delete(":id")
    removeClient(@Param('id', new ParseIntPipe()) clientId: number) {
        return;
    }

    constructor(private clientsService: ClientsService) { }
}