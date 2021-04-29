import { ProductListComponent } from 'src/app/components/shopping-cart/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BabyProductListComponent } from './components/shopping-cart/baby-product-list/baby-product-list.component';
import { SigninComponent } from 'src/app/components/signin/signin.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { CartComponent } from 'src/app/components/shopping-cart/cart/cart.component';
import { BakeryProductListComponent } from './components/shopping-cart/bakery-product-list/bakery-product-list.component';
import { BeautyProductListComponent } from './components/shopping-cart/beauty-product-list/beauty-product-list.component';
import { FruitsProductListComponent } from './components/shopping-cart/fruits-product-list/fruits-product-list.component';
import { BeveragesProductListComponent } from './components/shopping-cart/beverages-product-list/beverages-product-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent},
  { path: 'home', component: ShoppingCartComponent},
  { path: 'baby', component: BabyProductListComponent },
  { path: 'bakery', component: BakeryProductListComponent },
  { path: 'beauty', component: BeautyProductListComponent },
  { path: 'fruits', component: FruitsProductListComponent },
  { path: 'beverages', component: BeveragesProductListComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ProductListComponent,
  ShoppingCartComponent, 
  BabyProductListComponent,
  BakeryProductListComponent,
  SigninComponent,
  RegisterComponent,
  CartComponent,
  BeautyProductListComponent,
  FruitsProductListComponent,
  BeveragesProductListComponent ]