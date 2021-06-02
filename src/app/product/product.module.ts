import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product.routing.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
