import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, MaterialModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class AuthModule {}
