import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './component/cart/cart.component';
import { SharedRoutingModule } from './shared-routing.module';
import { EmptyCartComponent } from './component/empty-cart/empty-cart.component';



@NgModule({
  declarations: [EmptyCartComponent , 
  CartComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
})
export class SharedModule { }
