import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { AppEffect } from './Store/effects/app.effect';
import { reducer } from './Store/reducers/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthEffect } from './Store/effects/auth.effect';
import { AuthGuard } from './modules/auth/auth.guard';
import { CarousalComponent } from './components/carousal/carousal.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarousalComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([AuthEffect, AppEffect]),
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
