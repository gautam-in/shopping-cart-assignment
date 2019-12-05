import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { CoreModule } from './core/components/core.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule}    from '@angular/common/http';
import { ConstantsService } from './shared/services/constants.service';
import { ErrorDisplayDirective } from './shared/directives/error-display.directive';
import { FormsModule } from '@angular/forms';
import { FilterByType } from './shared/pipes/filter-by-type.pipe';
import { CartService } from './shared/services/cart.service';
import { LoadingComponent } from './core/components/loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductListComponent,
    SignupComponent,
    ErrorDisplayDirective,
    FilterByType,
    LoadingComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule
  ],
  providers: [ConstantsService,CartService],
  bootstrap: [AppComponent],
})
export class AppModule { }
