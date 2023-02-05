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
        { route: '/tasks', title: 'משימות', icon: 'tasks' },
    ];

    sidebar: Nav[] = [
        ...this.menu,
        { route: '/vegetables', title: 'ירקות', icon: 'carrot' },
        { route: '/fruits', title: 'פירות', icon: 'apple-alt' },
        { route: '/legumes', title: 'קטניות', icon: 'seedling' },
        { route: '/greens', title: 'ירוקים', icon: 'leaf' },
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
