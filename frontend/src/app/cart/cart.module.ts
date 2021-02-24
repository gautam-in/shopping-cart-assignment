import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycartComponent } from './components/mycart/mycart.component';
import { CartCounterComponent } from './components/cart-counter/cart-counter.component';



@NgModule({
  declarations: [MycartComponent, CartCounterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MycartComponent,
    CartCounterComponent
  ]
})
export class CartModule { }
