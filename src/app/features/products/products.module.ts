import { NgModule } from '@angular/core';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductItemComponent, ProductListComponent, SidebarComponent],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
