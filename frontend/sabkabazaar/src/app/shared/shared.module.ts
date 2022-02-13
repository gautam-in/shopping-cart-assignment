import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { ModalModule } from 'ngx-bootstrap/modal'

const components = [
  HeaderComponent,
  FooterComponent,
  ProductCardComponent
]

@NgModule({
  declarations: [...components, CartComponent],
  imports: [
    CommonModule,
    RouterModule,
  ], exports: [...components]
})
export class SharedModule { }
