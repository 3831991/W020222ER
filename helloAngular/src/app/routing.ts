import { Route, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { SettingsComponent } from "./settings/settings.component";
import { UsersComponent } from "./users/users.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: UsersComponent },
    { path: 'setting', component: SettingsComponent },
];