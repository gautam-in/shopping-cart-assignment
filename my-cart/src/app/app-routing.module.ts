import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path : '',redirectTo : '/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent , canActivate : [AuthGuard] },
  { path: 'products', loadChildren : () => import ('./products/products.module').then(module=> module.ProductsModule) },
  {path:'**',component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
