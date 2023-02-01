import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TasksRecycleBinComponent } from './tasks/tasks-recycle-bin/tasks-recycle-bin.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        LoginComponent,
        SignupComponent,
        NavbarComponent,
        HomeComponent,
        TasksRecycleBinComponent,
        TaskEditComponent,
        ErrorPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
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
