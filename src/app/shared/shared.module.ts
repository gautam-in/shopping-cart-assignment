import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SliderModule } from 'ngx-slider';
import { CartComponent } from './components/cart/cart.component';
const module = [CommonModule,SliderModule, RouterModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [CartComponent],
  imports: module,
  exports: [...module, CartComponent],
})
export class SharedModule {}
