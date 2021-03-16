import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { LoginAuthService } from './shared/services/login-services/login-auth.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, canActivate: [LoginAuthService] },
  {
    path: 'register',
    component: SignupComponent,
    canActivate: [LoginAuthService],
  },
  {
    path: 'plp',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
    canLoad: [AuthGuardService],
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuardService],
    canActivate: [AuthGuardService],
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
