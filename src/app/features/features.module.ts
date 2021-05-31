import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CarouselComponent,
  CarouselItemElement,
} from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel-item.directive';
let componentsArry = [
  CarouselComponent,
  CarouselItemDirective,
  CarouselItemElement,
];
@NgModule({
  declarations: componentsArry,
  imports: [CommonModule],
  exports: componentsArry,
})
export class FeaturesModule {}
