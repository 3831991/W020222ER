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

    remove(item: Response) {
        if (!confirm('Are you sure you want to delete?')) {
            return;
        }

        const sub = this.http.delete<void>(`http://localhost:3000/contact/${item.id}`).subscribe(() => {
            const i = this.data.findIndex(x => x.id === item.id);
            this.data.splice(i, 1);
            sub.unsubscribe();
        });
    }

    complete(item: Response) {
        const sub = this.http.put<void>(`http://localhost:3000/contact/${item.id}/status/complete`, {}).subscribe(() => {
            item.isCompleted = true;
            sub.unsubscribe();
        });
    }

    undo(item: Response) {
        const sub = this.http.put<void>(`http://localhost:3000/contact/${item.id}/status/undo`, {}).subscribe(() => {
            item.isCompleted = false;
            sub.unsubscribe();
        });
    }

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const sub = this.http.get<Response[]>("http://localhost:3000/contact").subscribe(data => {
            this.data = data;
            sub.unsubscribe();
        });
    }
}
