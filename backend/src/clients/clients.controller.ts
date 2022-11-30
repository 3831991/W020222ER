import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Client } from "./clients.entity";
import { ClientsService } from "./clients.service";

@Controller("clients")
export class ClientsController {

    // קבלת כל הלקוחות
    @Get()
    getClients() {
        return this.clientsService.getAll();
    }

    // קבלת לקוח אחד
    @Get(":id")
    getClient(@Param('id', new ParseIntPipe()) clientId: number) {
        return this.clientsService.getSingleClient(clientId);
    }

    // הוספת לקוח
    @Post()
    addClient(@Body() item: Client) {
        return this.clientsService.addClient(item);
    }

    // עריכת לקוח
    @Put()
    updateClient(@Body() item: Client) {
        return this.clientsService.updateClient(item);
    }

    // מחיקת לקוח
    @Delete(":id")
    removeClient(@Param('id', new ParseIntPipe()) clientId: number) {
        return this.clientsService.removeClientById(clientId);
    }

    constructor(private clientsService: ClientsService) { }
}
