import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/clients.entity';
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';
import { Contact } from './contact/contact.entity';
import { Task } from './tasks/tasks.entity';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'full-stack',
            entities: [
                __dirname + '/**/*.entity{.ts,.js}',
            ],
            synchronize: true,
            logging: true,
        }),
        TypeOrmModule.forFeature([Client, Contact, Task]),
    ],
    controllers: [
        AppController,
        ClientsController,
        ContactController,
        TasksController,
    ],
    providers: [
        AppService,
        ClientsService,
        ContactService,
        TasksService,
    ],
})
export class AppModule { }
