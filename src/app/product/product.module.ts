import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product.routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsResolver } from './product.resolver';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, ProductRoutingModule],
  providers: [ProductsResolver],
})
export class ProductModule {}
