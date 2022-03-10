import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbCarouselModule, NgbDropdownModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ReactiveFormsModule,
  NgbCarouselModule,
  NgbModalModule,
  NgbDropdownModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgbModalModule,
    CartComponent,
    NgbDropdownModule
  ]
})
export class SharedModule { }
