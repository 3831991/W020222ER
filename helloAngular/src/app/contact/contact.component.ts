import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    fullName: string;
    phone: string;
    email: string;
    content: string;
    satisfaction: number = 4;
    happines: number = 80;

    send() {
        console.log(`fullName: ${this.fullName}`);
        console.log(`phone: ${this.phone}`);
        console.log(`email: ${this.email}`);
        console.log(`content: ${this.content}`);
        console.log(`satisfaction: ${this.satisfaction}`);
        console.log(`happines: ${this.happines}`);

        this.utility.alert("הטופס נשלח בהצלחה");
    }

    banana(ev: string) {
        console.log(ev)
    }

    constructor(private utility: UtilityService) { }

    ngOnInit() {

    }

}
