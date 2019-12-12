
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { ErrorComponent } from './error/error.component';

import { GlobalErrorHandler } from './../global-error-handler.service';
import { CartItemComponent } from './../../cart/components/cart-item/cart-item.component';
import { CartOfferComponent } from './../../cart/components/cart-offer/cart-offer.component';
import { LogoComponent } from './header/components/logo/logo.component';
import { NavigationComponent } from './header/components/navigation/navigation.component';
import { SecondaryNavigationComponent } from './header/components/secondary-navigation/secondary-navigation.component';
import { MiniSecondaryNavComponent } from './header/components/mini-secondary-nav/mini-secondary-nav.component';
import { CartBtnComponent } from './header/components/cart-btn/cart-btn.component';
@NgModule({
  declarations: [
    CartItemComponent,
    CartOfferComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ErrorComponent,
    LogoComponent,
    NavigationComponent,
    SecondaryNavigationComponent,
    MiniSecondaryNavComponent,
    CartBtnComponent
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
