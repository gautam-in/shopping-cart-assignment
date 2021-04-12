import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { ProductsResolver } from './product.resolver';
//import { CartComponent } from '../header/cart/cart.component';
import { MaterialModule } from '../material.module';


//import { MaterialModule } from './materail.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    //CartComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    //MatDialogModule
   // NgbModal
  ],
  providers:[ProductService ,
  ProductsResolver
]
})
export class ProductModule { }
