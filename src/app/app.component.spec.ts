import { Location} from '@angular/common';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By, BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbActiveModal, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './api.service';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { LoginModule } from './login/login.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  let apiService: ApiService;
  let router: Router
  let location: Location
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes(routes),
        ProductModule, 
        LoginModule],
      declarations: [
        AppComponent,
        CartComponent
      ],
      providers: [ApiService, NgbActiveModal]
    }).compileComponents();
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create the app', () => {  
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sabka-bazar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sabka-bazar');
  });

  it(`should open cart modal on click cart button`, () => {
    const appFixture = TestBed.createComponent(AppComponent);
    const cartFixture = TestBed.createComponent(CartComponent);
    const btn = appFixture.debugElement.query(By.css('.cart-btn'))
    const cartHeader = cartFixture.debugElement.query(By.css('.modal-header'))
    const cartFooter = cartFixture.debugElement.query(By.css('.modal-footer'))
    btn.nativeElement.click()
    expect(cartHeader).toBeDefined();
    expect(cartFooter).toBeDefined();
  });

  it(`emit cart items`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let fakeCartData = {
      productId: 'default1',
      name: 'Close Up Ever Fresh Red Hot Gel Toothpaste, 150 gm',
      imgUrl: '/static/images/products/beauty-hygiene/closeup.jpg',
      price: 82,
      qty: 5,
    }
    let cartItemQty = app.cartItems.length;
    apiService.updateCartItems.next(fakeCartData)
    fixture.detectChanges();
    expect(app.cartItems.length).toEqual(cartItemQty + 1);
  })

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['product']);
    tick();
    expect(location.path()).toBe('/product');
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['login']);
    tick();
    expect(location.path()).toBe('/login');
  }));
});
