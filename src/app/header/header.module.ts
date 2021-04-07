import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderRoutingModule } from './header-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderService } from './header.service';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    HeaderService
  ]
})
export class HeaderModule {}
