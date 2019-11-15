import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: HomeComponent
  },
  {
    path:'product-list',
    pathMatch:'full',
    component: ProductListComponent
  },
  {
    path:'login',
    pathMatch:'full',
    component: LoginComponent
  },
  {
    path:'signup',
    pathMatch:'full',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
