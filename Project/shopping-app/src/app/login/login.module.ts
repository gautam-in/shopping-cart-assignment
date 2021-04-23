import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'signIn', component: SignInComponent },
];

@NgModule({
  declarations: [RegisterComponent, SignInComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
