import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    isShowAlert: boolean;
    alertText: string;

    setStyling() {
        for (const key in localStorage) {
            const val = localStorage[key];

            if (key == 'brightness') {
                document.body.style.filter = `brightness(${val}%)`;
                document.body.style.backgroundColor = `hsl(0, 0%, ${val}%)`;
            } else if (key == 'spacing') {
                document.body.style.letterSpacing = `${val}px`;
            } else if (key == 'fontSize') {
                document.body.style.fontSize = `${1 + val / 50}em`;
            } else if (key == 'margin') {
                document.body.style.margin = `0 ${val}rem`;
            } else if (key == 'invert') {
                document.body.style.filter = `invert(${val}%)`;
            }
        }
    }

    alert(text: string) {
        this.alertText = text;
        this.isShowAlert = true;
    }

    constructor() { }
}
