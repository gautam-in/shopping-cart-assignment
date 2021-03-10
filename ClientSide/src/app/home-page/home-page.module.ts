import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { CaraouselComponent } from './caraousel/caraousel.component';
import { CategoryBannerComponent } from './category-banner/category-banner.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    CaraouselComponent,
    CategoryBannerComponent,
  ],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
