import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MycartComponent } from './components/mycart/mycart.component';

const routes: Routes = [
  {path: 'cart', component: MycartComponent},
  {path: 'checkout', component: CheckoutComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
