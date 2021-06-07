import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../login-module/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('../sign-up-module/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../home-module/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../products-listing-module/products-listing.module').then(m => m.ProductsListingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../login-module/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
