import { Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProductsComponent } from "./pages/products/products.component";
import { RegisterComponent } from "./pages/register/register.component";

export const routes: Routes = [{
    path: '',
    component: LoginComponent 
}, {
    path: 'register',
    component: RegisterComponent
}, {
    path: 'home',
    component: HomeComponent
}, {
    path: 'products',
    component: ProductsComponent
}, {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
}];
