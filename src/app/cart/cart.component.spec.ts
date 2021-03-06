import { CartService } from 'src/app/Services/cart.service';
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
        RouterTestingModule
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
    spyOn(component, 'increaseProductQuantity').and.callThrough();
    component.increaseProductQuantity(product);
    expect(component.increaseProductQuantity).toHaveBeenCalled();
  });

  it('should call resetCart method', () => {
    spyOn(component, 'resetCart').and.callThrough();
    component.resetCart();
    expect(component.resetCart).toHaveBeenCalled();
  });

  it('should call removeProduct method', () => {
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
    spyOn(component, 'removeProduct').and.callThrough();
    component.removeProduct(product);
    expect(component.removeProduct).toHaveBeenCalled();
  });
});
