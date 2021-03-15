import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./submodules/login-signup/login.module').then(m => m.LoginModule)},
  {path: 'home', loadChildren: () => import('./submodules/home/home.module').then(m => m.HomeModule)
  , canActivate: [AuthGuardServiceService], runGuardsAndResolvers: 'always'},
  {path: 'productLists', loadChildren: () => import('./submodules/product-list/product-list.module')
  .then(m => m.ProductListModule),
  canActivate: [AuthGuardServiceService], runGuardsAndResolvers: 'always'},
  {path: 'cartlist', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
