import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLandingComponent } from './components/product-landing/product-landing.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ProductLandingComponent, ProductCardComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProductLandingComponent,
    ProductCardComponent
  ]
})
export class ProductsModule { }
