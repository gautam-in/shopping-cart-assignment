import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
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
        //component: HomeComponent,
      },
      {
        path: 'product',
        loadChildren: ()=>import('../product/product.module').then(module=>module.ProductModule)
        //component: ProductComponent,
      },
      // {
      //   path: 'product/:category',
      //   component: ProductComponent,
      // },
      {
        path: 'cart',
        component: CartComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
