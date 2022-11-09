import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    brightness: number = 100;
    spacing: number = 0;
    fontSize: number = 0;
    margin: number = 0;
    invert: number = 0;

    brightnessChange() {
        document.body.style.filter = `brightness(${this.brightness}%)`;
        document.body.style.backgroundColor = `hsl(0, 0%, ${this.brightness}%)`;
    }

    spacingChange() {
        document.body.style.letterSpacing = `${this.spacing}px`;
    }

    fontSizeChange() {
        document.body.style.fontSize = `${1 + this.fontSize / 50}em`;
    }

    marginChange() {
        document.body.style.margin = `0 ${this.margin}rem`;
    }

    invertChange() {
        document.body.style.filter = `invert(${this.invert}%)`;
    }

    constructor() { }

    ngOnInit() {
    }

}
