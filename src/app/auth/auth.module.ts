import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [MatInputModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
