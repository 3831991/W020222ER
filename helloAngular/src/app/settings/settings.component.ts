import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    brightness: number = 100;

    brightnessChange() {
        document.body.style.filter = `brightness(${this.brightness}%)`;
        document.body.style.backgroundColor = `hsl(0, 0%, ${this.brightness}%)`;
    }

    constructor() { }

    ngOnInit() {
    }

}
