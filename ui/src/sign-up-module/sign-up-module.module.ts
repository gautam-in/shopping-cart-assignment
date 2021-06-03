import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignUpModuleRoutingModule } from './sign-up-module-routing.module';
import { SignUpModuleComponent } from './sign-up-module.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignUpPageComponent,
    SignUpModuleComponent
  ],
  imports: [
    CommonModule,
    SignUpModuleRoutingModule,
    FormsModule
  ]
})
export class SignUpModuleModule { }
