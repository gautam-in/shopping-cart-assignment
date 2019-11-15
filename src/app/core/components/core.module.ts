
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';


import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CartComponent } from 'src/app/cart/cart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[HeaderComponent,FooterComponent],
  providers: [],
})
export class CoreModule { }
