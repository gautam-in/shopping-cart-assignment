import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsRoutingModule } from './products.routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProductsComponent, ProductItemsComponent,ProductItemComponent, SidebarComponent,],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
