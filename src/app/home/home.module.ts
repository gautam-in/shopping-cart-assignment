import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        NgbCarouselModule
    ]
})
export class HomeModule { }
