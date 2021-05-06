import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './product.service';
import { ProductNavComponent } from './product-nav/product-nav.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ ProductNavComponent, ProductComponent, ProductListComponent],
  imports: [CommonModule, ProductRoutingModule],
  providers: [ProductService],
})
export class ProductModule {}
