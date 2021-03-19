import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';

import {ButtonComponent} from './button/button.component';
import {CartItemComponent} from './cart/cart-item/cart-item.component';
import {CartComponent} from './cart/cart.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ImagesCarouselComponent} from './images-carousel/images-carousel.component';
import {InputComponent} from './input/input.component';
import {ItemComponent} from './item/item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ImagesCarouselComponent,
    InputComponent,
    ButtonComponent,
    ItemComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ImagesCarouselComponent,
    InputComponent,
    ButtonComponent,
    ItemComponent,
    CartComponent,
  ]
})
export class ComponentsModule {
}
