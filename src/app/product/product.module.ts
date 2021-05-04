import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './product/products.component';
import { ProductService } from './product.service';
import { ProductNavComponent } from './product-nav/product-nav.component';

@NgModule({
  declarations: [ProductsComponent, ProductNavComponent],
  imports: [CommonModule, ProductRoutingModule],
  providers: [ProductService],
})
export class ProductModule {}
