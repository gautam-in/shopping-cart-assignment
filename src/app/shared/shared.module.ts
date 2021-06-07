import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { MaterialModule } from './modules/material.module';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { PlaceholderDirective } from './directive/placeholder/placeholder.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
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
