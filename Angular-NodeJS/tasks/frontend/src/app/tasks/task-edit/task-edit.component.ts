import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Task, TaskStatuses, urlevels } from '../tasks.interface';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {
    task?: Task;
    sub?: Subscription;
    urlevels = urlevels;
    form?: FormGroup;
    isEditableState?: boolean;

    statuses = [
        { status: TaskStatuses.open, title: 'פתוח' },
        { status: TaskStatuses.inProgress, title: 'בטיפול' },
        { status: TaskStatuses.complete, title: 'טופל' },
    ];

    buildForm(item?: Task) {
        this.form = new FormGroup({
            task: new FormControl(item?.task, [
                Validators.required,
            ]),
            status: new FormControl(item?.status, [
                Validators.required,
            ]),
            level: new FormControl(item?.level, [
                Validators.required,
            ]),
            remark: new FormControl(item?.remark, [
                Validators.required,
            ]),
        });
    }

    save() {
        if (this.isEditableState) {
            const sub = this.http.put<void>(`tasks/${this.task?.id}`, this.form?.value).subscribe(() => {
                this.router.navigate(['tasks']);
                sub.unsubscribe();
            });
        } else {
            const sub = this.http.post<Task>("tasks", this.form?.value).subscribe(data => {
                this.router.navigate(['tasks']);
                sub.unsubscribe();
            });
        }
    }

    getTask(id: string) {
        const sub = this.http.get<Task>(`task/${id}`).subscribe(item => {
            this.task = item;
            this.buildForm(item);
            sub.unsubscribe();
        });
    }

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {

        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];

            if (id == 'new') {
                this.isEditableState = false;
                this.buildForm();
            } else {
                this.isEditableState = true;
                this.getTask(id);
            }
        });

    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}
