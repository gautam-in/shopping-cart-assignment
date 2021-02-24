import { CartModule } from './../cart/cart.module';
import { ProductsModule } from './../products/products.module';
import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    ProductsModule,
    CartModule
  ],
  exports: [
    CommonModule,
    AuthModule,
    ProductsModule,
    CartModule
  ]
})
export class SharedModule { }
