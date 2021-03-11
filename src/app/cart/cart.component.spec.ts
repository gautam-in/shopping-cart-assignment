import { HomeComponent } from './../home/home.component';
import { CartService } from 'src/app/services/cart.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'home', component: HomeComponent}
      ])
      ],
      providers: [CartService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit method', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call increaseProductQuantity method', () => {
    const product = {
      name: 'Fresho Kiwi - Green, 3 pcs',
      imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
      description: 'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
      price: 87,
      stock: 50,
      category: '5b6899953d1a866534f516e2',
      sku: 'fnw-kiwi-3',
      id: '5b6c6a7f01a7c38429530883'
    };
    spyOn(cartService, 'increaseProductQuantity').and.callThrough();
    component.increaseProductQuantity(product);
    expect(cartService.increaseProductQuantity).toHaveBeenCalled();
  });

  it('should call resetCart method', () => {
    spyOn(cartService, 'resetCart').and.callThrough();
    component.resetCart();
    expect(cartService.resetCart).toHaveBeenCalled();
  });

  it('should call removeProductFromCart method', () => {
    const product = {
      name: 'Fresho Kiwi - Green, 3 pcs',
      imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
      description: 'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
      price: 87,
      stock: 50,
      category: '5b6899953d1a866534f516e2',
      sku: 'fnw-kiwi-3',
      id: '5b6c6a7f01a7c38429530883'
    };
    spyOn(cartService, 'removeProductFromCart').and.callThrough();
    component.removeProductFromCart(product);
    expect(cartService.removeProductFromCart).toHaveBeenCalled();
  });

  it('should call totalAmount method', () => {
    spyOn(cartService, 'totalAmount').and.callThrough();
    component.totalAmount();
    expect(cartService.totalAmount).toHaveBeenCalled();
  });

  it('should call totalItemPrice method', () => {
    spyOn(cartService, 'totalItemPrice').and.callThrough();
    component.totalItemPrice();
    expect(cartService.totalItemPrice).toHaveBeenCalled();
  });
});
