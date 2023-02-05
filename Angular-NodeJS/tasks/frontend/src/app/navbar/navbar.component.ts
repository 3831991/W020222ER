import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Nav } from './navbar.interface';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    active: string = '';
    isOpen: boolean = false;

    menu: Nav[] = [
        { route: '/', title: 'בית', icon: 'home' },
        { route: '/tasks', title: 'משימות', icon: 'check-square-o' },
    ];

    sidebar: Nav[] = [
        ...this.menu,
        { route: '/', title: 'ירקות', icon: 'home' },
        { route: '/', title: 'פירות', icon: 'home' },
        { route: '/', title: 'קטניות', icon: 'home' },
        { route: '/', title: 'ירוקים', icon: 'home' },
        { route: '/', title: 'פירות יבשים', icon: 'home' },
    ]

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
