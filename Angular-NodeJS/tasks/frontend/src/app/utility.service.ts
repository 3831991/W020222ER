import { Injectable } from '@angular/core';
import { User } from './signup/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    private user?: User;

    setUser(user?: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    constructor() { }
}
