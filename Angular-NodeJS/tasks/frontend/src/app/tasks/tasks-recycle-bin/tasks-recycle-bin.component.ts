import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Task } from '../tasks.interface';

@Component({
    selector: 'app-tasks-recycle-bin',
    templateUrl: './tasks-recycle-bin.component.html',
    styleUrls: ['./tasks-recycle-bin.component.scss']
})
export class TasksRecycleBinComponent {
    data: Task[] = [];

    constructor(private http: HttpService) { }

    ngOnInit() {
        const sub = this.http.get<Task[]>("tasks?deleted=true").subscribe(data => {
            this.data = data;
            sub.unsubscribe();
        });
    }
}
