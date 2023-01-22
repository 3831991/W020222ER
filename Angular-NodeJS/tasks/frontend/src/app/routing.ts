import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { TasksRecycleBinComponent } from "./tasks/tasks-recycle-bin/tasks-recycle-bin.component";
import { TasksComponent } from "./tasks/tasks.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'tasks-recycle-bin', component: TasksRecycleBinComponent },
];