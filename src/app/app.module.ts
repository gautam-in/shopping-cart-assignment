import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProductsComponent } from './component/products/products.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { RegisterComponent } from './component/register/register.component';
import { SigninComponent } from './component/signin/signin.component';
import { FooterComponent } from './component/footer/footer.component';
import { OverlayComponent } from './component/overlay/overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';

// import "@angular/compiler"
// MDB Angular Free
// import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from '@angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    SigninComponent,
    FooterComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    OverlayModule,
    // MatLabel,
    // MatLabel,
    MatInputModule
    // MatHint
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
