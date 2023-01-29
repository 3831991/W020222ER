import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Task } from '../tasks.interface';

@Component({
    selector: 'app-tasks-recycle-bin',
    templateUrl: './tasks-recycle-bin.component.html',
    styleUrls: ['./tasks-recycle-bin.component.scss']
})
export class TasksRecycleBinComponent {
    data: Task[] = [];

    restore(item: Task) {
        const sub = this.http.put<void>(`tasks/restore/${item.id}`, {}).pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(() => {
            const i = this.data.findIndex(x => x.id == item.id);
            this.data.splice(i, 1);
        });
    }

    constructor(private http: HttpService) { }

    ngOnInit() {
        const sub = this.http.get<Task[]>("tasks?deleted=true").subscribe(data => {
            this.data = data;
            sub.unsubscribe();
        });
    }
}
