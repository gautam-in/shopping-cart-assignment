import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' , redirectTo: "home"},
  { path: "home", component: HomeComponent },
  { path: "products", loadChildren: () => import(`../app/product-list/product.module`).then(m => m.ProductModule) },
  { path: "signin", loadChildren: () => import(`../app/login/login.module`).then(m => m.LoginModule) },
  { path: "register", loadChildren: () => import(`../app/register/register.module`).then(m => m.RegisterModule) },
  { path: "cart", loadChildren: () => import(`../app/cart/cart.module`).then(m => m.CartModule) },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
