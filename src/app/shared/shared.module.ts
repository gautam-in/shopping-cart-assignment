import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
const module = [CommonModule, RouterModule, FormsModule, ReactiveFormsModule]
@NgModule({
  declarations: [],
  imports: module,
  exports: module,
})
export class SharedModule {}
