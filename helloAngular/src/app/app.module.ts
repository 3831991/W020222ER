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

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ListComponent,
        ContactComponent,
        UsersComponent,
        RangeComponent,
        SettingsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
