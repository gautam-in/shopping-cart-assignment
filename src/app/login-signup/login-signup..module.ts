import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignUpRoutingModule } from './login-signup.routing.module';
import { LoginComponent } from './login/login.component';
import { LoginSignupComponent } from './login-signup.component';
import { SignUpComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSignUpService } from './login-signup.service';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, LoginSignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginSignUpRoutingModule
  ],
  providers: [LoginSignUpService],
})
export class LoginSignUpModule {}
