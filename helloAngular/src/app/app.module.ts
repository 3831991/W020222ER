import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
