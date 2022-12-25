import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contact } from './contact-responses.interface';

@Component({
    selector: 'app-contact-responses',
    templateUrl: './contact-responses.component.html',
    styleUrls: ['./contact-responses.component.css']
})
export class ContactResponsesComponent implements OnInit {
    contactList: Contact[] = [];

    remove(id: number) {
        const sub = this.http.delete<void>(`http://localhost:3000/contact/${id}`).subscribe(() => {
            const i = this.contactList.findIndex(x => x.id == id);
            this.contactList.splice(i, 1);
            sub.unsubscribe();
        });
    }

    complete(item: Contact) {
        const sub = this.http.put<void>(`http://localhost:3000/contact/${item.id}/complete`, {}).subscribe(() => {
            item.isCompleted = true;
            sub.unsubscribe();
        });
    }

    undo(item: Contact) {
        const sub = this.http.put<void>(`http://localhost:3000/contact/${item.id}/undo`, {}).subscribe(() => {
            item.isCompleted = false;
            sub.unsubscribe();
        });
    }

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const sub = this.http.get<Contact[]>("http://localhost:3000/contact/list").subscribe(data => {
            this.contactList = data;
            sub.unsubscribe();
        });
    }

}
