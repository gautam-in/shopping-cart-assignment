import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListingPageComponent } from './products-listing-page/products-listing-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListingPageComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListingModuleRoutingModule { }
