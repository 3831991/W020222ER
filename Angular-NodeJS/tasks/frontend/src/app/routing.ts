import { Routes } from "@angular/router";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CartComponent } from "./market/cart/cart.component";
import { MarketComponent } from "./market/market.component";
import { ProductComponent } from "./market/products-managment/product/product.component";
import { ProductsManagmentComponent } from "./market/products-managment/products-managment.component";
import { ProductsComponent } from "./market/products/products.component";
import { SignupComponent } from "./signup/signup.component";
import { TaskEditComponent } from "./tasks/task-edit/task-edit.component";
import { TasksRecycleBinComponent } from "./tasks/tasks-recycle-bin/tasks-recycle-bin.component";
import { TasksComponent } from "./tasks/tasks.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'task/:id', component: TaskEditComponent },
    { path: 'tasks-recycle-bin', component: TasksRecycleBinComponent },
    { path: 'market/products/manage', component: ProductsManagmentComponent },
    { path: 'market/product', component: ProductComponent },
    { path: 'market/product/:id', component: ProductComponent },
    { path: 'market', component: MarketComponent, children: [
        { path: 'products', component: ProductsComponent },
        { path: 'cart', component: CartComponent },
        // { path: 'products/:category', component: ProductsComponent },
    ] },
    { path: '**', component: ErrorPageComponent },
];