import { AuthComponent } from './auth.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent, LoginComponent, RegisterComponent, SharedModule]
})

export class AuthModule { }
