import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ModalModule } from 'ngx-bootstrap/modal'

const components = [
  HeaderComponent,
  FooterComponent,
  ProductCardComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
  ], exports: [...components]
})
export class SharedModule { }
