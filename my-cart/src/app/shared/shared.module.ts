import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';



@NgModule({
  declarations: [MainHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MainHeaderComponent
  ]
})
export class SharedModule { }
