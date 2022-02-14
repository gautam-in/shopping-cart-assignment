import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsSidenavComponent } from './products-sidenav/products-sidenav.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsSidenavComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ProductsComponent, children: [
          { path: '', component: ProductListComponent },
        ]
      }
    ]),
    SharedModule
  ]
})
export class ProductsModule { }
