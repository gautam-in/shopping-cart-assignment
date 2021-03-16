import { SharedModule } from './../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';


@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
