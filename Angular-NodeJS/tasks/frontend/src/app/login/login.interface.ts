import { User } from "../signup/user.interface";

export interface UserLogin {
    status: 'success' | 'error';
    message?: string;
    user?: User;
}