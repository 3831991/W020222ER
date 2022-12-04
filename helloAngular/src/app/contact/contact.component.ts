import { HttpClient } from '@angular/common/http';
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
        const obj = {
            fullName: this.fullName,
            phone: this.phone,
            email: this.email,
            content: this.content,
            satisfaction: this.satisfaction,
            happines: this.happines,
        };

        this.http.post<void>("http://localhost:3000/contact", obj).subscribe(() => {
            this.utility.alert("הטופס נשלח בהצלחה");
        });
    }

    banana(ev: string) {
        console.log(ev)
    }

    constructor(private utility: UtilityService, private http: HttpClient) { }

    ngOnInit() { }
}
