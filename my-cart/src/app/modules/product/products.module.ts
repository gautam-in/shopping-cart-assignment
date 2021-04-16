import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemsComponent } from './components/product-items/product-items.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsRoutingModule } from './products.routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductsComponent, ProductItemsComponent, ProductItemComponent, SidebarComponent,],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductsModule { }
