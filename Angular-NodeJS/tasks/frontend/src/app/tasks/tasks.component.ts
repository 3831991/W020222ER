import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LevelTypes, Structure, Task, TaskStatuses } from './tasks.interface';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
    // הכנסנו את זה למשנה בתוך הקלאס ע"מ שנוכל להשתמש בו ב-HTML
    // לא חובה להשתמש באותו שם - אך ככה מקובל
    TaskStatuses = TaskStatuses;
    newTask?: string;

    sections: Structure[] = [
        {
            status: TaskStatuses.open,
            title: 'משימות פתוחות',
            color: '#e8e885',
            cards: [],
        },
        {
            status: TaskStatuses.inProgress,
            title: 'בטיפול',
            color: '#e8c885',
            cards: [],
        },
        {
            status: TaskStatuses.complete,
            title: 'טופלו',
            color: '#85e894',
            cards: [],
        },
    ];

    urlevels = [
        {
            level: LevelTypes.low,
            title: 'נמוכה',
            color: '#cddc39',
        },
        {
            level: LevelTypes.medium,
            title: 'בינונית',
            color: '#ff9800',
        },
        {
            level: LevelTypes.high,
            title: 'גבוהה',
            color: '#a02424',
        },
    ];

    private statusChange(s: Structure, item: Task, newStatus: TaskStatuses) {
        const sub = this.http.put<void>(`tasks/${item.id}/status/${newStatus}`, {}).subscribe(() => {
            // מחקנו מהמערך הנוכחי את הפנייה (היות והיא צריכה לעבוד לכרטיסיה אחרת)
            const i = s.cards.findIndex(x => x.id == item.id);
            s.cards.splice(i, 1);

            // חיפשנו את מערך היעד (ע"מ להעביר לשם את הכרטיסייה)
            const struc = this.sections.find(x => x.status == newStatus);
            // שינינו לכרטיסייה את הסטטוב לסטטוס החדש
            item.status = newStatus;
            struc?.cards.push(item);

            sub.unsubscribe();
        });
    }
    
    isDuplicate() {
        const cards = [
            ...this.sections[TaskStatuses.open].cards,
            ...this.sections[TaskStatuses.inProgress].cards,
        ];
        const item = cards.find(x => x.task == this.newTask);

        return Boolean(item);
    }

    levelChange(item: Task) {
        const sub = this.http.put<void>(`tasks/${item.id}/level/${item.level}`, {}).subscribe(() => {
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

    dragover(s: Structure) {
        this.sections.forEach(x => x.isDrag = false);
        s.isDrag = true;
    }

    dragend(s: Structure, item: Task) {
        const target = this.sections.find(x => x.isDrag);

        if (target) {
            if (target.status !== s.status) {
                this.statusChange(s, item, target.status);
            }
        }

        this.sections.forEach(x => x.isDrag = false);
    }

    addTask() {
        if (this.isDuplicate()) {
            alert("יש כבר משימה כזאת");
            return;
        }

        const sub = this.http.post<Task>("tasks", { task: this.newTask }).subscribe(data => {
            this.sections.find(x => x.status == TaskStatuses.open)?.cards.push(data);
            this.newTask = '';
            sub.unsubscribe();
        });
    }

    remove(s: Structure, item: Task) {
        const sub = this.http.delete<void>(`tasks/${item.id}`).subscribe(() => {
            const i = s.cards.findIndex(x => x.id == item.id);
            s.cards.splice(i, 1);

            sub.unsubscribe();
        });
    }

    constructor(private http: HttpService) { }

    ngOnInit() {
        const sub = this.http.get<Task[]>("tasks").subscribe(data => {
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
