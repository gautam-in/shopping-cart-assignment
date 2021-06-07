import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListingRoutingModule } from './product-listing-routing.module';
import { ProductListingComponent } from './products-component/product-listing.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [ProductListingComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductListingRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class ProductListingModule {}
