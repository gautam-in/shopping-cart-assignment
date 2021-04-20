import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsResolver } from './product.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    resolve: { productDetail: ProductsResolver },
  },
  {
    path: 'list/:id',
    component: ProductListComponent,
    resolve: { productDetail: ProductsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
