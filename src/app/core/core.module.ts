import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartComponent, FooterComponent, HeaderComponent],
  exports: [CartComponent, FooterComponent, HeaderComponent],
  imports: [SharedModule],
})
export class CoreModule {}
