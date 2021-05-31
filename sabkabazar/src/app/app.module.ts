import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SliderModule } from 'ngx-slider';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    ProductItemComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
