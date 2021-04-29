import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { HomeComponent } from './components/shopping-cart/home/home.component';
import { BabyProductListComponent } from './components/shopping-cart/baby-product-list/baby-product-list.component';
import { BabyProductItemComponent } from './components/shopping-cart/baby-product-list/baby-product-item/baby-product-item.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { BakeryProductListComponent } from './components/shopping-cart/bakery-product-list/bakery-product-list.component';
import { BakeryProductItemComponent } from './components/shopping-cart/bakery-product-list/bakery-product-item/bakery-product-item.component';
import { BeveragesProductListComponent } from './components/shopping-cart/beverages-product-list/beverages-product-list.component';
import { FruitsProductListComponent } from './components/shopping-cart/fruits-product-list/fruits-product-list.component';
import { BeautyProductListComponent } from './components/shopping-cart/beauty-product-list/beauty-product-list.component';
import { BeveragesProductItemComponent } from './components/shopping-cart/beverages-product-list/beverages-product-item/beverages-product-item.component';
import { FruitsProductItemComponent } from './components/shopping-cart/fruits-product-list/fruits-product-item/fruits-product-item.component';
import { BeautyProductItemComponent } from './components/shopping-cart/beauty-product-list/beauty-product-item/beauty-product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    routingComponents,
    ProductItemComponent,
    HomeComponent,
    BabyProductListComponent,
    BabyProductItemComponent,
    SigninComponent,
    RegisterComponent,
    BakeryProductListComponent,
    BakeryProductItemComponent,
    BeveragesProductListComponent,
    FruitsProductListComponent,
    BeautyProductListComponent,
    BeveragesProductItemComponent,
    FruitsProductItemComponent,
    BeautyProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
