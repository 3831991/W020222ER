import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { routes } from './routing';
import { HttpService } from './http.service';
import { UtilityService } from './utility.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        LoginComponent,
        SignupComponent,
        NavbarComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        HttpService,
        UtilityService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }