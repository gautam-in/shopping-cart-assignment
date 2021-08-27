import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';
import { SigninComponent } from './component/signin/signin.component';
// import { OverlayComponent } from './overlay/overlay.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  // {path: "header", component: HeaderComponent},
 
  { path: "products", component: ProductsComponent },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent},
  {path: "signin", component: SigninComponent},
  // {path: "overlay", component: OverlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
