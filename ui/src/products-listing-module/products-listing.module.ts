import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListingModuleRoutingModule } from './products-listing-module-routing.module';
import { ProductsListingPageComponent } from './products-listing-page/products-listing-page.component';
import { ProductsListingModuleComponent } from './products-listing-module.component';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListFilterPipe } from 'src/Shared/pipes/productsListFilter';


@NgModule({
  declarations: [
    ProductsListingPageComponent,
    ProductsListingModuleComponent,
    ProductCardComponent,
    ProductListFilterPipe
  ],
  imports: [
    CommonModule,
    ProductsListingModuleRoutingModule,
    FormsModule
  ]
})
export class ProductsListingModule { }
