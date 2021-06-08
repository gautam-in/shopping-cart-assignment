import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ToastrModule } from 'ngx-toastr';
import { mockUser } from 'src/app/auth/mock/user.mock';
import { mockCart } from 'src/app/features/cart/mock/cart.mock';
import { addProduct } from 'src/app/features/cart/store/actions/cart.actions';
import { AppState } from 'src/app/store/app.reducer';

import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let store: MockStore<AppState>;
  const initialState: AppState = {
    auth: {
      user: mockUser,
      authError: '',
      loading: false,
    },
    cartList: {
      cart: [mockCart],
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ToastrModule.forRoot()],
      declarations: [ProductItemComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = mockCart;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Buy now should add product to cart', () => {
    const spy = spyOn(store, 'dispatch');
    component.addToCart(mockCart);
    expect(spy).toHaveBeenCalled();
  });

  it('minus button click should call deleteProduct action on store.', () => {
    const spy = spyOn(store, 'dispatch');
    component.minusQuantity(component.product);
    expect(spy).toHaveBeenCalled();
  });
});
