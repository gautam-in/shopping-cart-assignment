import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SliderComponent } from './components/slider/slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HeaderComponent, LogoComponent, FooterComponent, LoaderComponent, PageNotFoundComponent, SliderComponent],
  imports: [
    RouterModule,
    IvyCarouselModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    LoaderComponent,
    PageNotFoundComponent,
    SliderComponent,
  ]
})
export class BlocksModule { }
