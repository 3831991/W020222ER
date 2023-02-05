export interface Task {
    id: number;
    createTime: Date;
    task: string;
    status: TaskStatuses;
    level: LevelTypes;
    remark: string;
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

export const urlevels = [
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