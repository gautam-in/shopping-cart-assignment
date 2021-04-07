import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home-page/home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginAuthService } from './services/login-services/login-auth.service';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [LoginAuthService] },
  { path: 'signin', component: SigninComponent },
  {
    path: 'plp',
    component: ProductListComponent,
    canActivate: [LoginAuthService],
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
