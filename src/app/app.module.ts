import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule}    from '@angular/common/http';
import { ConstantsService } from './shared/services/constants.service';
import { FormsModule } from '@angular/forms';
import { FilterByType } from './shared/pipes/filter-by-type.pipe';
import { CartService } from './shared/services/cart.service';
import { LoadingComponent } from './core/components/loading/loading.component';
import { CardBoardComponent } from './product-list/components/card-board/card-board.component';
import { NavigationTabsComponent } from './product-list/components/navigation-tabs/navigation-tabs.component';
import { MiniNavigationComponent } from './product-list/components/mini-navigation/mini-navigation.component';
import { GlobalErrorHandler } from './shared/services/global-error-handler.service';
import { SharedModule } from './app.shared.module';
import { CarouselComponent } from './home/components/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductListComponent,
    SignupComponent,
    FilterByType,
    LoadingComponent,
    CardBoardComponent,
    NavigationTabsComponent,
    MiniNavigationComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    FormsModule
  ],
  providers: [ConstantsService,CartService,GlobalErrorHandler],
  bootstrap: [AppComponent],
})
export class AppModule { }
