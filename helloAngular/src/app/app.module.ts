import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { RangeComponent } from './range/range.component';
import { SettingsComponent } from './settings/settings.component';
import { routes } from './routing';
import { HomeComponent } from './home/home.component';
import { UtilityService } from './utility.service';
import { AlertComponent } from './alert/alert.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FirstUpperPipe } from './first-upper.pipe';
import { SearchPipe } from './search.pipe';
import { SquareComponent } from './square/square.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactResponsesComponent } from './contact-responses/contact-responses.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ListComponent,
        ContactComponent,
        UsersComponent,
        RangeComponent,
        SettingsComponent,
        HomeComponent,
        AlertComponent,
        GalleryComponent,
        FirstUpperPipe,
        SearchPipe,
        SquareComponent,
        ClientsComponent,
        ContactResponsesComponent,
        TasksComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        UtilityService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
