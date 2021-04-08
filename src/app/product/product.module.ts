import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { ProductsResolver } from './product.resolver';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers:[ProductService ,
  ProductsResolver
]
})
export class ProductModule { }
