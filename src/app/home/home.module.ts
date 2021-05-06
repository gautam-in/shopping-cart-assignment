import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [HomeComponent, CarouselComponent, CategoryComponent, CategoryListComponent],
  imports: [CommonModule, HomeRoutingModule, NgbCarouselModule],
})
export class HomeModule {}
