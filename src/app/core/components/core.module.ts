
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';


import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { ErrorComponent } from './error/error.component';

import { GlobalErrorHandler } from './../global-error-handler.service';

@NgModule({
  declarations: [
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
})
export class CoreModule { }
