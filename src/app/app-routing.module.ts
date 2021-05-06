import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ProductComponent } from './Component/product/product.component';
import { CartComponent } from './Component/cart/cart.component';


const routes: Routes = [
  {path: '', redirectTo : 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent },
  {path:'login', component:LoginComponent },
  {path:'signup', component:RegistrationComponent },
  {path:'products', component:ProductComponent },
  {path:'cart', component:CartComponent },
  {path: '**' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
