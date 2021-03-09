import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "home"
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: "products",
    canActivate: [AuthGuard],
    loadChildren: () => import(`../app/product-list/product.module`).then(m => m.ProductModule)
  },
  {
    path: "auth",
    loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: "cart",
    canActivate: [AuthGuard],
    loadChildren: () => import(`../app/cart/cart.module`).then(m => m.CartModule)
  },
  {
    path: "**", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
