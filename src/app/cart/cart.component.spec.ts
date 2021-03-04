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

  it('should call addProductQuantity method', () => {
    spyOn(component, 'addProductQuantity').and.callThrough();
    component.addProductQuantity({});
    expect(component.addProductQuantity).toHaveBeenCalled();
  });

  it('should call resetCart method', () => {
    spyOn(component, 'resetCart').and.callThrough();
    component.resetCart();
    expect(component.resetCart).toHaveBeenCalled();
  });

  it('should call removeProduct method', () => {
    spyOn(component, 'removeProduct').and.callThrough();
    component.removeProduct({});
    expect(component.removeProduct).toHaveBeenCalled();
  });
});
