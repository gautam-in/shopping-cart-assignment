import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { SliderModule } from 'ngx-slider';
import { ToastrModule } from 'ngx-toastr';
import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
} from 'ngx-ui-loader';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './cart/components/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { cartReducer } from './store/cart.reducer';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxUiLoaderModule,
        ToastrModule.forRoot(),
        MatInputModule,
        SliderModule,
        HttpClientModule,
        NgxUiLoaderRouterModule,
        NgxUiLoaderHttpModule,
        StoreModule.forRoot({ cartList: cartReducer }),
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PageNotFoundComponent,
        CartComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sabkabazar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sabkabazar');
  });
});
