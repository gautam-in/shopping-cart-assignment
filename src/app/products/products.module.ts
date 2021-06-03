import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductItemComponent, ProductListComponent, SidebarComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
