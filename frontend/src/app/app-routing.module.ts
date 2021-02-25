import { BlockRoutingModule } from './blocks/block-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductRoutingModule } from './products/product-routing.module';
import { CartRoutingModule } from './cart/cart-routing.module';

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRoutingModule, ProductRoutingModule, AuthRoutingModule, CartRoutingModule, BlockRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
