import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home-page/home/home.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CaraouselComponent } from './home-page/caraousel/caraousel.component';
import { CategoryBannerComponent } from './home-page/category-banner/category-banner.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { MiniCartComponent } from './mini-cart/mini-cart.component';
import { ModalComponent } from './modal/modal.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeComponent,
    SigninComponent,
    FooterComponent,
    RegisterComponent,
    CaraouselComponent,
    CategoryBannerComponent,
    ProductCardComponent,
    ProductListComponent,
    MiniCartComponent,
    ModalComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
