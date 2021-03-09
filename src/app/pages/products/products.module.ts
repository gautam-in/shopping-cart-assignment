import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ComponentsModule} from '../../components/components.module';
import {CategoryFilterComponent} from './category-filter/category-filter.component';
import {ProductsComponent} from './products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CategoryFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ProductsComponent}]),
    ComponentsModule
  ]
})
export class ProductsModule {
}
