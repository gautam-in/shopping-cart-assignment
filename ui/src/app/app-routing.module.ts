import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../login-module/login.module').then(m => m.LoginModule)
  },
  {
  path: 'signup',
  loadChildren: () => import('../sign-up-module/sign-up-module.module').then(m => m.SignUpModuleModule)
},
{
  path: 'home',
  loadChildren: () => import('../home-module/home-module.module').then(m => m.HomeModuleModule)
},
{
  path: 'products',
  loadChildren: () => import('../products-listing-module/products-listing-module.module').then(m => m.ProductsListingModuleModule)
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
