import { Component, OnInit } from '@angular/core';
import { users } from './users.data';
import { User } from './users.interface';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users = users;

    remove(user: User) {
        const i = this.users.findIndex(x => x.id == user.id);
        this.users.splice(i, 1);
    }

    constructor() { }

    ngOnInit() {
    }

}
