import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import(`../app/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () => import(`../app/product-list/product.module`).then(m => m.ProductModule)
  },
  {
    path: '404', component: PageNotFoundComponent
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
