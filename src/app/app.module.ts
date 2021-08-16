import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { OverlayComponent } from './overlay/overlay.component';

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
