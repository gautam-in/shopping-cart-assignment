import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
const components = [CartComponent, FooterComponent, HeaderComponent];
@NgModule({
  declarations: components,
  exports: components,
  imports: [SharedModule],
})
export class CoreModule {}
