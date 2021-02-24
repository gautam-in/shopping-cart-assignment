import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycartComponent } from './components/mycart/mycart.component';

const routes: Routes = [
  {path: 'cart', component: MycartComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
