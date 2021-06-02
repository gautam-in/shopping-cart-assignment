import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromApp from './store/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgrxRouterStoreModule } from './ngrx-router.module';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { AppEffectModule } from './app.effects.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    NgrxRouterStoreModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    StoreModule.forRoot(fromApp.appReducer),
    AppEffectModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    SharedModule,
    CartModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true, disableClose: true },
    },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 4000 } },
    MatSnackBar,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
