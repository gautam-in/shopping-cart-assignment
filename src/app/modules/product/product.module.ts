import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [ProductRoutingModule, SharedModule],
})
export class ProductModule {}
