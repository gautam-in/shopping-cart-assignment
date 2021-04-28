import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './product/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { ProductsResolver } from './product.resolver';
import { ProductNavComponent } from './product-nav/product-nav.component';

@NgModule({
  declarations: [ProductsComponent, ProductListComponent, ProductNavComponent],
  imports: [CommonModule, ProductRoutingModule],
  providers: [ProductService, ProductsResolver],
})
export class ProductModule {}
