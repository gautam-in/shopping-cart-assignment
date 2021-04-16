import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './user/auth.guard';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'app',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'app',
  //   loadChildren: () =>
  //     import('./header/header.module').then((h) => h.HeaderModule),
  // },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import(`../app/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import(`../app/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () => import(`../app/product/product.module`).then(m => m.ProductModule)
  },
  // {
  //   path: '404', component: PageNotFoundComponent
  // },
  // { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
