import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderModule } from 'ngx-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';

import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
} from 'ngx-ui-loader';
import { cartReducer } from './store/cart.reducer';
import { CoreModule } from './core/core.module';
import { HomeModule } from './features/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SliderModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
    StoreModule.forRoot({ cartList: cartReducer }),
    HomeModule, // initial page module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
