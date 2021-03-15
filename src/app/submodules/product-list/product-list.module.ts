import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DropDownComponent } from './components/menu-bar/drop-down/drop-down.component';



@NgModule({
  declarations: [ProductsComponent, SideBarComponent, DropDownComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
