import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Nav } from './navbar.interface';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    active: string;

    menu: Nav[] = [
        { route: '/', title: 'בית' },
        { route: '/users', title: 'משתמשים' },
        { route: '/list', title: 'רשימה' },
        { route: '/contact', title: 'צור קשר' },
        { route: '/setting', title: 'הגדרות' },
    ];

    constructor(router: Router) {

        router.events.subscribe(ev => {
            if (ev instanceof NavigationStart) {
                this.active = ev.url;
            }
        });

    }

    ngOnInit() {
    }

}
