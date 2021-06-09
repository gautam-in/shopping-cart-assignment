import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { PlaceholderDirective } from './directive/placeholder/placeholder.directive';
import { MaterialModule } from './modules/material.module';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
@NgModule({
  declarations: [SafeHtmlPipe, CartComponent, PlaceholderDirective],

  imports: [CommonModule, FlexLayoutModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    CartComponent,
    RouterModule,
    PlaceholderDirective,
    FlexLayoutModule,
  ],
})
export class SharedModule {}
