import { HomeRoutingModule } from './home/home-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/components/login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { PageNotFoundComponent } from './blocks/components/page-not-found/page-not-found.component';
import { HomeComponent } from './home/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductLandingComponent } from './products/components/product-landing/product-landing.component';
import { ProductRoutingModule } from './products/product-routing.module';

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRoutingModule, ProductRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
