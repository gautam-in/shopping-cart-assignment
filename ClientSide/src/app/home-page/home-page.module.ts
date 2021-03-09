import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home.component';
import { CaraouselComponent } from './caraousel/caraousel.component';
import { CategoryBannerComponent } from './category-banner/category-banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    CaraouselComponent,
    CategoryBannerComponent,
  ],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
