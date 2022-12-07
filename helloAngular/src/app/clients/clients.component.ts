import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from './clients.interface';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

    clients: Client[] = [];

    // אובייקט לצורך הוספת לקוח חדש
    addedItem: Client = {
        id: 0,
        createTime: '',
        city: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        isFavorite: false,
    };

    remove(id: number) {
        this.http.delete<void>(`http://localhost:3000/clients/${id}`).subscribe(() => {
            // מחפשים את האינדקס של האובייקט למחיקה (שנמחק)
            const i = this.clients.findIndex(x => x.id == id);
            // מוחקים את האובייקט שנמחק בשרת מהמערך שלנו
            this.clients.splice(i, 1);
        });
    }

    add() {
        this.http.post<Client>("http://localhost:3000/clients", this.addedItem).subscribe(item => {
            // מוסיפים את האובייקט שקיבלנו מהשרת למערך
            this.clients.unshift(item);

            // מאפסים את האובייקט של ההוספה
            this.addedItem = {
                id: 0,
                createTime: '',
                city: '',
                email: '',
                firstName: '',
                lastName: '',
                phone: '',
                isFavorite: false,
            };
        });
    }

    favorite(item: Client) {
        const sub = this.http.put<void>(`http://localhost:3000/clients/${item.id}/favorite`, {}).subscribe(() => {
            item.isFavorite = true;
            sub.unsubscribe();
        });
    }

    unfavorite(item: Client) {
        const sub = this.http.put<void>(`http://localhost:3000/clients/${item.id}/unfavorite`, {}).subscribe(() => {
            item.isFavorite = false;
            sub.unsubscribe();
        });
    }

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<Client[]>("http://localhost:3000/clients").subscribe(data => {
            this.clients = data;
        });
    }

}
