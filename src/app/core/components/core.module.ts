
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { ErrorComponent } from './error/error.component';

import { GlobalErrorHandler } from './../global-error-handler.service';
import { CartItemComponent } from './../../cart/components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    CartItemComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[HeaderComponent,FooterComponent],
  providers: [{
    provide: ErrorHandler, useClass : GlobalErrorHandler
  }],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
