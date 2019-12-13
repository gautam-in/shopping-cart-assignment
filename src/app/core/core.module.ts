
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { CartItemComponent } from './../cart/components/cart-item/cart-item.component';
import { CartOfferComponent } from './../cart/components/cart-offer/cart-offer.component';
import { ErrorComponent } from './components/error/error.component';
import { LogoComponent } from './components/header/components/logo/logo.component';
import { NavigationComponent } from './components/header/components/navigation/navigation.component';
import { SecondaryNavigationComponent } from './components/header/components/secondary-navigation/secondary-navigation.component';
import { MiniSecondaryNavComponent } from './components/header/components/mini-secondary-nav/mini-secondary-nav.component';
import { CartBtnComponent } from './components/header/components/cart-btn/cart-btn.component';
import { SharedModule } from './../app.shared.module';
import { GlobalErrorHandler } from './../shared/services/global-error-handler.service';
import { NoDataExceptionComponent } from './../cart/components/no-data-exception/no-data-exception.component';

@NgModule({
  declarations: [
    CartItemComponent,
    CartOfferComponent,
    HeaderComponent,
    FooterComponent,
    NoDataExceptionComponent,
    CartComponent,
    ErrorComponent,
    LogoComponent,
    NavigationComponent,
    SecondaryNavigationComponent,
    MiniSecondaryNavComponent,
    CartBtnComponent
  ],
  imports: [
    SharedModule,
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
