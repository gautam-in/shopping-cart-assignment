import { ProductListItemComponent } from 'src/app/components/shopping-cart/product-list/product-list-item/product-list-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BabyItemComponent } from 'src/app/components/shopping-cart/product-list/baby-item/baby-item.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductListItemComponent},
  { path: 'home', component: ShoppingCartComponent},
  { path: 'baby', component: BabyItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ProductListItemComponent,
   ShoppingCartComponent,
   BabyItemComponent ]
