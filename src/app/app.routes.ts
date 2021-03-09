import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module')
      .then(module => module.LoginModule)
  }, {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module')
      .then(module => module.RegisterModule)
  }, {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
      .then(module => module.HomeModule)
  }, {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module')
      .then(module => module.ProductsModule)
  }, {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
