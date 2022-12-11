import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createTime: Date;

    @Column()
    task: string;

    @Column({ type: 'int' })
    status: TaskStatuses;

    @Column({ type: 'boolean', default: false })
    isDeleted: boolean;
}

export enum TaskStatuses {
    open = 0,
    inProgress = 1,
    complete = 2,
}
