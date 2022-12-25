import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from './responses.interface';

@Component({
    selector: 'app-responses',
    templateUrl: './responses.component.html',
    styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent {
    data: Response[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const sub = this.http.get<Response[]>("http://localhost:3000/responses").subscribe(data => {
            this.data = data;
            sub.unsubscribe();
        });
    }
}
