import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniCartModuleRoutingModule } from './mini-cart-module-routing.module';
import { MiniCartPageComponent } from './mini-cart-page/mini-cart-page.component';
import { MiniCartModuleComponent } from './mini-cart-module.component';


@NgModule({
  declarations: [
    MiniCartPageComponent,
    MiniCartModuleComponent
  ],
  imports: [
    CommonModule,
    MiniCartModuleRoutingModule
  ],
  exports:[MiniCartPageComponent]
})
export class MiniCartModuleModule { }
