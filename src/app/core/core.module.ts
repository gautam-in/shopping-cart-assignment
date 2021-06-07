import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [SharedModule],
  exports: [
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
