import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';

import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
} from 'ngx-ui-loader';
import { cartReducer } from './core/store/reducer/cart.reducer';
import { CoreModule } from './core/core.module';
import { HomeModule } from './features/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    ToastrModule.forRoot(), // Toastr Module for showing messages on ui
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule, // shows loader on each navigation.
    NgxUiLoaderHttpModule, // shows loader for each http request.
    StoreModule.forRoot({ cartList: cartReducer }),
    HomeModule, // initial page module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
