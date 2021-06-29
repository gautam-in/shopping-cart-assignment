import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { CarouselModule } from 'src/app/shared/modules/carousel/carousel.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CarouselModule, SharedModule, CoreModule],
})
export class HomeModule {}
