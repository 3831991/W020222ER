import { Component, OnInit } from '@angular/core';
import { User } from './users.interface';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    user: User = {
        id: 5,
        firstName: 'Rafi',
        lastName: 'Cohen',
        isActive: true,
        email: 'abc@abc.com',
    };

    constructor() { }

    ngOnInit() {
    }

}
