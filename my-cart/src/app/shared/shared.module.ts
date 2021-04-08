import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { RouterModule } from '@angular/router';
import { EllipsisPipe } from './elipsis-pipe/ellipsis.pipe';
import { OrderPipe } from './order-pipe/order.pipe';
import { ModalBackdropComponent } from '../modal-backdrop/modal-backdrop.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { FilterPipe } from './filter-pipe/filter.pipe';

@NgModule({
  declarations: [
    MainHeaderComponent,
    OrderPipe,
    EllipsisPipe,
    ModalBackdropComponent,
    ShoppingCartComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainHeaderComponent,
    OrderPipe,
    EllipsisPipe,
    FilterPipe
  ]
})
export class SharedModule { }
