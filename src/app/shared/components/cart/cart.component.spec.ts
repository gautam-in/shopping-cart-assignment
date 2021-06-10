import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { mockUser } from 'src/app/auth/mock/user.mock';
import { AppState } from 'src/app/store/app.reducer';
import { mockProduct } from '../../products/components/mock/product.mock';
import { mockCart } from '../../../mock/cart.mock';
import { cartReducer } from '../../store/reducer/cart.reducer';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: MockStore<AppState>;
  const initialState: AppState = {
    auth: {
      user: mockUser,
      authError: '',
      loading: false,
    },
    cartList: {
      cart: [],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ cartList: cartReducer })],
      declarations: [CartComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('close cart should emit closeCart event', () => {
    const spy = spyOn(component.close, 'emit');
    component.closeCart();
    expect(spy).toBeTruthy();
  });

  it('close cart should emit closeCart event', () => {
    const spy = spyOn(component.close, 'emit');
    component.closeCart();
    expect(spy).toHaveBeenCalled();
  });

  it('plus quantity should dispatch addProduct action on store', () => {
    const spy = spyOn(store, 'dispatch');
    component.plusQuantity(mockCart);
    expect(spy).toHaveBeenCalled();
  });

  it('minus quantity should dispatch deleteProduct action on store', () => {
    const spy = spyOn(store, 'dispatch');
    component.minusQuantity(mockCart);
    expect(spy).toHaveBeenCalled();
  });

  it('get total amount for cartItems', () => {
    component.cartItem = [mockCart];
    const totalAmount = component.totalAmount;
    expect(totalAmount).toEqual(mockCart.product.price * mockCart.quantity);
  });
});
