import { NgbdModalBasic } from './components/modal-basic/modal-basic.component';
import { CartModule } from '../features/cart/cart.module';
import { ProductsModule } from '../features/products/products.module';
import { AuthModule } from '../features/auth/auth.module';
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
