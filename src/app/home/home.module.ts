import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FeaturesModule } from 'src/app/features/features.module';
import { BannerResolver } from './service/banner.resolver';
import { CategoryResolver } from './service/category.resolver';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: [BannerResolver, CategoryResolver],
      },
    ]),
    FeaturesModule,
  ],
})
export class HomeModule {}
