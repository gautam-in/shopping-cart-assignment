import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { PasswordCompareDirective } from './directives/password-compare.directive';



@NgModule({
  declarations: [LoginComponent, SignupComponent, PasswordCompareDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent, SignupComponent
  ]
})
export class AuthModule { }
