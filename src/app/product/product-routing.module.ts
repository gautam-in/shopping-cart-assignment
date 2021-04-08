import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsResolver } from './product.resolver';
//import { ProductsResolver } from './product.resolver';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    resolve: { productDetail: ProductsResolver }
    
    // children:[
    //   {
    //     path: 'list',
    //     component: ProductListComponent,
    //   },
    // ]
  },
  // {
  //   path: 'productList',
  //   component: ProductListComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
