import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';

import {ButtonComponent} from './button/button.component';
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
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ImagesCarouselComponent,
    InputComponent,
    ButtonComponent,
    ItemComponent,
  ]
})
export class ComponentsModule {
}
