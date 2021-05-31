import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent,
        pathMatch: 'full',
        children: [
          {
            path: '',
            component: ProductListComponent,
            pathMatch: 'full',
          },
        ],
      },
    ]),
  ],
})
export class ProductModule {}
