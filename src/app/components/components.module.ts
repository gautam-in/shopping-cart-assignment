import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ImagesCarouselComponent} from './images-carousel/images-carousel.component';
import {InputComponent} from './input/input.component';
import {ButtonComponent} from './button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ImagesCarouselComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ImagesCarouselComponent,
    InputComponent,
    ButtonComponent,
  ]
})
export class ComponentsModule {
}
