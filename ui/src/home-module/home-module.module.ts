import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeModuleComponent } from './home-module.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeModuleComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    NgbModule
  ]
})
export class HomeModuleModule { }
