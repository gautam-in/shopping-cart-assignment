import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { RouterModule } from '@angular/router';
import { EllipsisPipe } from './pipes/elipsis-pipe/ellipsis.pipe';
import { OrderPipe } from './pipes/order-pipe/order.pipe';
import { ModalBackdropComponent } from './components/modal-backdrop/modal-backdrop.component';
import { ShoppingCartComponent } from './../../components/shopping-cart/shopping-cart.component';
import { FilterPipe } from '../../modules/shared/pipes/filter-pipe/filter.pipe';

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
