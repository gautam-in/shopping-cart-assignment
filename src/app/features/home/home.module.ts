import { NgModule } from '@angular/core';
import { SliderModule } from 'ngx-slider';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, SliderModule],
  exports: [],
})
export class HomeModule {}
