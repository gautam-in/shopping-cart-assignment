import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';
import {
  CarouselComponent,
  CarouselItemElement,
} from './carousel/carousel.component';
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
export class CarouselModule {}
