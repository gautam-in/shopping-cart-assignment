import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BREAKPOINT } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MY_CUSTOM_BREAKPOINTS } from './core/common/constants/constants';
import { CoreModule } from './core/core.module';
import { NgrxRouterStoreModule } from './ngrx-router.module';
import { SharedModule } from './shared/shared.module';
import { AppEffectModule } from './store/effects/app.effects.module';
import * as fromApp from './store/reducers/app.reducer';

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
    { provide: BREAKPOINT, useValue: MY_CUSTOM_BREAKPOINTS, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
