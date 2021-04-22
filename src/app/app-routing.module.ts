import { ProductListComponent } from 'src/app/components/shopping-cart/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BabyProductListComponent } from './components/shopping-cart/baby-product-list/baby-product-list.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  { path: 'home', component: ShoppingCartComponent},
  { path: 'baby', component: BabyProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ProductListComponent,
  ShoppingCartComponent, 
  BabyProductListComponent ]