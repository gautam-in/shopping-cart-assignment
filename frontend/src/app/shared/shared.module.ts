import { NgbdModalBasic } from './components/modal-basic/modal-basic.component';
import { CartModule } from './../cart/cart.module';
import { ProductsModule } from './../products/products.module';
import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgbdModalBasic
  ],
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
    CartModule,
    NgbdModalBasic
  ]
})
export class SharedModule { }
