export interface Task {
    id: number;
    createTime: Date;
    task: string;
    status: TaskStatuses;
    level: LevelTypes;
    isDeleted: boolean;
}

export enum TaskStatuses {
    open = 0,
    inProgress = 1,
    complete = 2,
}

export interface Structure {
    status: TaskStatuses;
    title: string;
    color: string;
    cards: Task[];
    isDrag?: boolean;
}

export enum LevelTypes {
    low = 0,
    medium = 1,
    high = 2,
}