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
        { route: '/', title: 'בית', icon: 'home' },
        { route: '/users', title: 'משתמשים', icon: 'users' },
        { route: '/list', title: 'רשימה', icon: 'list' },
        { route: '/contact', title: 'צור קשר', icon: 'envelope' },
        { route: '/setting', title: 'הגדרות', icon: 'cog' },
        { route: '/gallery', title: 'גלרייה', icon: 'camera' },
        { route: '/clients', title: 'לקוחות', icon: 'user' },
        { route: '/contact-responses', title: 'ניהול פניות', icon: 'server' },
        { route: '/tasks', title: 'משימות', icon: 'check-square-o' },
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
