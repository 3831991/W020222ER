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

    remove(id: number) {
        this.http.delete<void>(`http://localhost:3000/clients/${id}`).subscribe(() => {

        });
    }

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<Client[]>("http://localhost:3000/clients").subscribe(data => {
            this.clients = data;
        });
    }

}
