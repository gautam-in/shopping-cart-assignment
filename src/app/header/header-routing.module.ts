import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../shared/component/cart/cart.component';
import { HeaderComponent } from './header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'home',
        loadChildren: ()=>import('../home/home.module').then(module=>module.HomeModule)
      },
      {
        path: 'product',
        loadChildren: ()=>import('../product/product.module').then(module=>module.ProductModule)
      },
      {
        path: 'cart',
        loadChildren: ()=>import('../shared/shared.module').then(module =>module.SharedModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
