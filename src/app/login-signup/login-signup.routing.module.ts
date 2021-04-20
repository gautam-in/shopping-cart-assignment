import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CartComponent } from '../shared/component/cart/cart.component';
import { LoginSignupComponent } from './login-signup.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
  {
   path: '',
   component: LoginSignupComponent,
   children: [
    {
        path: '',
        redirectTo: 'signup'
    },
    {
        path: 'signup',
        component: SignUpComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((module) => module.HomeModule),
    },
    {
        path: 'product',
        loadChildren: () =>
          import('../product/product.module').then((module) => module.ProductModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../cart/cart.module').then((module) => module.CartModule),
      }
   ]
  }
  
      
    //   {
    //     path: 'home',
    //     loadChildren: () =>
    //       import('../home/home.module').then((module) => module.HomeModule),
    //   },
    //   {
    //     path: 'product',
    //     loadChildren: () =>
    //       import('../product/product.module').then(
    //         (module) => module.ProductModule
    //       ),
    //   },
    //   {
    //     path: 'cart',
    //     loadChildren: () =>
    //       import('../shared/shared.module').then(
    //         (module) => module.SharedModule
    //       ),
    //   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSignUpRoutingModule {}
