import { HomeRoutingModule } from './home/home-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductRoutingModule } from './products/product-routing.module';

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRoutingModule, ProductRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
