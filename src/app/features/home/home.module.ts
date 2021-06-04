import { NgModule } from '@angular/core';
import { SliderModule } from 'ngx-slider';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, SliderModule],
  exports: [HomeComponent],
})
export class HomeModule {}
