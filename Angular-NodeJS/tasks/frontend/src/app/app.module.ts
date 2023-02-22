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
import { MarketComponent } from './market/market.component';
import { ProductsManagmentComponent } from './market/products-managment/products-managment.component';
import { ProductComponent } from './market/products-managment/product/product.component';
import { ProductsComponent } from './market/products/products.component';
import { CartComponent } from './market/cart/cart.component';
import { AgePipe } from './age.pipe';
import { DatePipe } from '@angular/common';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

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
        ErrorPageComponent,
        MarketComponent,
        ProductsManagmentComponent,
        ProductComponent,
        ProductsComponent,
        CartComponent,
        AgePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        SocialLoginModule,
    ],
    providers: [
        HttpService,
        UtilityService,
        DatePipe,
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '947566006072-tjim5c02r01t67jl6k56grjb0vk9aj42.apps.googleusercontent.com'
                        )
                    },
                ],
                onError: (err) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
