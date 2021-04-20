import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { EmptyCartModalComponent } from './empty-cart-modal/empty-cart-modal.component';

@NgModule({
  declarations: [EmptyCartModalComponent, CartComponent],
  imports: [CommonModule, CartRoutingModule],
})
export class CartModule {}
