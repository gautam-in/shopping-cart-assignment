import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniCartPageComponent } from './mini-cart-page/mini-cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: MiniCartPageComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiniCartModuleRoutingModule { }
