import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Structure, Task, TaskStatuses } from './tasks.interface';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    // הכנסנו את זה למשנה בתוך הקלאס ע"מ שנוכל להשתמש בו ב-HTML
    // לא חובה להשתמש באותו שם - אך ככה מקובל
    TaskStatuses = TaskStatuses;

    sections: Structure[] = [
        {
            status: TaskStatuses.open,
            title: 'משימות פתוחות',
            color: 'yellow',
            cards: [],
        },
        {
            status: TaskStatuses.inProgress,
            title: 'בטיפול',
            color: 'orange',
            cards: [],
        },
        {
            status: TaskStatuses.complete,
            title: 'טופלו',
            color: 'green',
            cards: [],
        },
    ];

    statusChange(s: Structure, item: Task, newStatus: TaskStatuses) {
        const sub = this.http.put<void>(`http://localhost:3000/tasks/${item.id}/status/${newStatus}`, {}).subscribe(() => {
            // מחקנו מהמערך הנוכחי את הפנייה (היות והיא צריכה לעבוד לכרטיסיה אחרת)
            const i = s.cards.findIndex(x => x.id == item.id);
            s.cards.splice(i, 1);

            // חיפשנו את מערך היעד (ע"מ להעביר לשם את הכרטיסייה)
            const struc = this.sections.find(x => x.status == newStatus);
            // שינינו לכרטיסייה את הסטטוב לסטטוס החדש
            item.status = newStatus;
            struc.cards.push(item);

            sub.unsubscribe();
        });
    }

    undo(s: Structure, item: Task) {
        if (s.status == TaskStatuses.complete) {
            this.statusChange(s, item, TaskStatuses.inProgress);
        } else if (s.status == TaskStatuses.inProgress) {
            this.statusChange(s, item, TaskStatuses.open);
        }
    }

    prossing(s: Structure, item: Task) {
        this.statusChange(s, item, TaskStatuses.inProgress);
    }

    complete(s: Structure, item: Task) {
        this.statusChange(s, item, TaskStatuses.complete);
    }

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const sub = this.http.get<Task[]>("http://localhost:3000/tasks").subscribe(data => {
            data.forEach(task => {
                const item = this.sections.find(s => s.status == task.status);

                if (item) {
                    item.cards.push(task);
                }
            });

            sub.unsubscribe();
        });
    }

}
