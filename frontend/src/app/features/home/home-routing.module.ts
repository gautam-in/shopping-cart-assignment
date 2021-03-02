import { ProductLandingComponent } from '../products/components/product-landing/product-landing.component';
import { SignupComponent } from '../auth/components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
