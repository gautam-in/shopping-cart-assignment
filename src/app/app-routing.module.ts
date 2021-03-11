import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./loginSignup/login.module').then(m => m.LoginModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) , canActivate: [AuthGuardServiceService]
   , runGuardsAndResolvers: 'always'},
  {path: 'productLists', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule), 
  canActivate: [AuthGuardServiceService], runGuardsAndResolvers: 'always'},
  {path: 'cartlist', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
