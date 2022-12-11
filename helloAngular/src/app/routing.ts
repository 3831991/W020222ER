import { Route, Routes } from "@angular/router";
import { ClientsComponent } from "./clients/clients.component";
import { ContactResponsesComponent } from "./contact-responses/contact-responses.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { SettingsComponent } from "./settings/settings.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UsersComponent } from "./users/users.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: UsersComponent },
    { path: 'setting', component: SettingsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'contact-responses', component: ContactResponsesComponent },
    { path: 'tasks', component: TasksComponent },
];