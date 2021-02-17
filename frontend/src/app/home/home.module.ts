import { RouterModule } from '@angular/router';
import { BannerService } from './services/banner.service';
import { AuthModule } from './../auth/auth.module';
import { BlocksModule } from './../blocks/blocks.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCategoryCardComponent } from './components/product-category-card/product-category-card.component';


@NgModule({
  declarations: [HomeComponent, ProductCategoryCardComponent],
  imports: [
    CommonModule,
    BlocksModule,
    AuthModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [BannerService],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
