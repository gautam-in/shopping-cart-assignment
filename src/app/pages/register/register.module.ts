import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ComponentsModule} from '../../components/components.module';
import {RegisterComponent} from './register.component';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: RegisterComponent}]),
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class RegisterModule {
}
