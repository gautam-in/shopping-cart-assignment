import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo : 'home', pathMatch:'full'},
  {path:'auth', loadChildren : () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  {path:'home', loadChildren : () => import('./modules/home/home.module').then(m => m.HomeModule) },
  {path:'products', loadChildren : () => import('./modules/product/product.module').then(m=>m.ProductModule) },
  {path:'cart', loadChildren : () => import('./modules/cart/cart.module').then(m=>m.CartModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
