import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CartModule } from '../features/cart/cart.module';
const components = [FooterComponent, HeaderComponent];
@NgModule({
  declarations: components,
  exports: components,
  imports: [SharedModule, CartModule],
})
export class CoreModule {}
