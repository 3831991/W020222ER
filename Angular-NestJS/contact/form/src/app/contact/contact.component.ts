import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    isSended = false;

    form = new FormGroup({
        fullName: new FormControl('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20),
        ]),
        phone: new FormControl('', [
            Validators.required,
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        content: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(500),
        ]),
    });

    send() {
        const sub = this.http.post<void>("http://localhost:3000/contact", this.form.value).pipe(finalize(() => {
            sub.unsubscribe();
        })).subscribe(() => {
            this.isSended = true;
        });
    }

    constructor(private http: HttpClient) {}

    ngOnInit() {

    }
}
