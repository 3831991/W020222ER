export interface Setting {
    field: string;
    title: string;
    min: number;
    max: number;
    value: number;
    default?: number;
}