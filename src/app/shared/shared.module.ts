
import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CartComponent, AlertComponent],
  imports: [
    CommonModule,
    NgbAlertModule
  ],
  entryComponents: [CartComponent, AlertComponent, NgbAlertModule]
})
export class SharedModule { }
