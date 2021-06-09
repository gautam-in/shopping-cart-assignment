import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product.routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [ProductRoutingModule, SharedModule],
})
export class ProductModule {}
