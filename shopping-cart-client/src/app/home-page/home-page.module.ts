import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoryBannerComponent } from './category-banner/category-banner.component';
import { CaraouselComponent } from './caraousel/caraousel.component';
import { HomePageRoutingModule } from './home-page-routing.module';



@NgModule({
  declarations: [CaraouselComponent, CategoryBannerComponent,HomeComponent],
  imports: [
    CommonModule,HomePageRoutingModule
  ]
})
export class HomePageModule { }
