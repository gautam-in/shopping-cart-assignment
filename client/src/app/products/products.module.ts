import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    BsDropdownModule.forRoot(),
  ],
})
export class ProductsModule {}
