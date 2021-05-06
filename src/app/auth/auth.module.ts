import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [AuthService, UserService],
})
export class AuthModule {}
