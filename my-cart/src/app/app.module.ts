import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { AppEffect } from './app.effect';
import { reducer } from './reducers/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthEffect } from './auth/auth.effect';
import { AuthGuard } from './auth/auth.guard';
import { CarousalComponent } from './carousal/carousal.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarousalComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([AuthEffect,AppEffect]),
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
