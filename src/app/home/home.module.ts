import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BannerResolver } from './service/banner.resolver';
import { CategoryResolver } from './service/category.resolver';
import { ProjectionModule } from '../projection/projection.module';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ProjectionModule],
})
export class HomeModule {}
