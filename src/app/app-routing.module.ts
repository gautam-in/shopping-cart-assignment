import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path:'' || 'home',
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
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
