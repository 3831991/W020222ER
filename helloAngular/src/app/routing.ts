import { Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { ListComponent } from "./list/list.component";
import { SettingsComponent } from "./settings/settings.component";
import { UsersComponent } from "./users/users.component";

export const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: UsersComponent },
    { path: 'setting', component: SettingsComponent },
];