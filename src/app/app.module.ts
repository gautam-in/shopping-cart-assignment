import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromApp from './store/reducers/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgrxRouterStoreModule } from './ngrx-router.module';
import { SharedModule } from './shared/shared.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { AppEffectModule } from './store/effects/app.effects.module';
import { CoreModule } from './core/core.module';
import { BREAKPOINT } from '@angular/flex-layout';
import { MY_CUSTOM_BREAKPOINTS } from './core/common/constants/constants';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    NgrxRouterStoreModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
    StoreModule.forRoot(fromApp.appReducer),
    AppEffectModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    SharedModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true, disableClose: true },
    },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 4000 } },
    { provide: BREAKPOINT, useValue: MY_CUSTOM_BREAKPOINTS, multi: true },
    MatSnackBar,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
