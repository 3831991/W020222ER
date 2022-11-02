export interface User {
    id: number;
    firstName: string;
    lastName: string;
    birthday?: string;
    email?: string;
    isActive: boolean;
}