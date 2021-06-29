import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { noop, Observable, of, throwError } from 'rxjs';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';
import { UtilService } from 'src/app/core/services/util.service';
import { selectAuthState } from 'src/app/core/store/selectors/auth.selectors';
import { AppState } from 'src/app/models/app-state.model';
import { testAppState } from 'src/app/modules/home/service/banner.resolver.spec';
import { testingProducts } from 'src/app/modules/product/product-list/product-list.component.spec';
import { ProductService } from 'src/app/modules/product/service/product.service';
import { CartProductModel } from '../../models/cart-product.model';
import { CartState } from '../../models/cart-state.model';
import { MaterialModule } from '../../modules/material.module';
import {
  addCartError,
  addCartSuccess,
  addProduct,
} from '../actions/cart-list.actions';
import { CartActions } from '../actions/cartlist.actions.types';
import { selectCartState } from '../selectors/cart.selectors';
import { CartEffects } from './cart.effects';

const cartProduct: CartProductModel = {
  name: 'Fresho Kiwi - Green, 3 pcs',
  imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
  description:
    'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
  price: 87,
  stock: 50,
  category: '5b6899953d1a866534f516e2',
  sku: 'fnw-kiwi-3',
  id: '5b6c6a7f01a7c38429530883',
  productPrice: 0,
  count: 1,
  productInCart: 0,
};

const cartStateInstance: CartState = {
  products: [
    ...testingProducts.currentProducts.slice(0, 2).map((e) => {
      let cart: CartProductModel = {
        ...e,
        count: 1,
        productPrice: 0,
        productInCart: 1,
      };
      cart.productPrice = cart.count * e.price;
      return cart;
    }),
  ],
};

const response = {
  response: 'Success',
  responseMessage: 'Product added to cart successfully',
};

describe('CartEffects', () => {
  let effects: CartEffects;
  let store: MockStore<AppState>;
  let service: any;
  const initialState: AppState = {
    ...testAppState,
  };
  let actions$ = new Observable<Action>();
  let mockCartSelector: any;
  let mockAuthSelector: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MaterialModule,
      ],
      providers: [
        CartEffects,
        UtilService,
        {
          provide: ProductService,
          useValue: jasmine.createSpyObj(ProductService, ['addToCart']),
        },
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
      ],
    });
    effects = TestBed.inject(CartEffects);
    service = TestBed.inject(ProductService);
    store = TestBed.inject(MockStore);
    mockCartSelector = store.overrideSelector(selectCartState, {
      products: [],
    });

    mockAuthSelector = store.overrideSelector(selectAuthState, {
      ...testAppState.auth,
    });
  });

  it('can load instance', () => {
    expect(effects).toBeTruthy();
  });

  describe('addProductAction', () => {
    it('should dispatch SetBanners Action, on success', () => {
      const action = addProduct({ payload: cartProduct, quantity: 2 });
      actions$ = of(action);
      service.addToCart.and.returnValue(of(response));
      const outcome = addCartSuccess({ payload: response.responseMessage });
      // subscribe to execute the Effect
      effects.addProductAction.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });

    it('should call open snackbar', () => {
      const action = CartActions.addCartSuccess({
        payload: ErrorMsg.ORDER_PLACED,
      });
      let util = TestBed.inject(UtilService);
      spyOn(util, 'openSnackBar');
      actions$ = of(action);
      effects.cartSuccessAction$.subscribe(noop);
      expect(util.openSnackBar).toHaveBeenCalled();
    });

    it('should call open snackbar', () => {
      const action = CartActions.placeOrderSuccess({
        payload: ErrorMsg.ORDER_PLACED,
      });
      let util = TestBed.inject(UtilService);
      spyOn(util, 'openSnackBar');
      actions$ = of(action);
      effects.postPlaceOrderSuccessAction$.subscribe(noop);
      expect(util.openSnackBar).toHaveBeenCalled();
    });

    it('should dispatch addCartError Action, on Failure', () => {
      const action = addProduct({ payload: cartProduct, quantity: 2 });
      actions$ = of(action);
      service.addToCart.and.returnValue(
        throwError({
          error: {
            error: ErrorMsg.UNKNOWN_ERROR,
          },
        })
      );
      const outcome = addCartError({ payload: ErrorMsg.UNKNOWN_ERROR });
      // subscribe to execute the Effect
      effects.addProductAction.subscribe((action) => {
        expect(action).toEqual(outcome);
      });

      service.addToCart.and.returnValue(throwError(ErrorMsg.UNKNOWN_ERROR));
      effects.addProductAction.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });
  });

  describe('fetchLocalCartAction', () => {
    it('should dispatch Add Products Action, on success', () => {
      const action = CartActions.fetchLocalCart();
      localStorage.setItem('cartModel', JSON.stringify(cartStateInstance));
      actions$ = of(action);
      const outcome = CartActions.addProducts({
        payload: [...cartStateInstance.products],
      });
      // subscribe to execute the Effect
      effects.fetchLocalCartAction.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });

    it('should dispatch dummy  Action, on cart model not exists in localstorage', () => {
      localStorage.removeItem('cartModel');
      const action = CartActions.fetchLocalCart();
      actions$ = of(action);

      const outcome = { type: 'DUMMY' };
      // subscribe to execute the Effect
      effects.fetchLocalCartAction.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });
  });

  describe('saveLocalCartAction', () => {
    it('should dispatch Add Products Action, on success', () => {
      mockCartSelector.setResult({
        ...cartStateInstance,
      });
      store.refreshState();
      const action = CartActions.addProduct({
        payload: cartStateInstance.products[0],
        quantity: 1,
      });
      spyOn(localStorage, 'setItem');
      const outcome = CartActions.computeCart({});

      actions$ = of(action);
      effects.saveLocalCartAction.subscribe(noop);
      expect(localStorage.setItem).toHaveBeenCalled();
      effects.updateCartAction$.subscribe((ac) => {
        expect(ac).toEqual(outcome);
      });
    });
  });

  describe('cartOrderPlacedAction$', () => {
    it('should dispatch Add Products Action, on success', () => {
      const action = CartActions.placeOrder({});
      const outcome = CartActions.placeOrderFail({
        payload: ErrorMsg.INVALID_USER,
      });

      actions$ = of(action);
      effects.cartOrderPlacedAction$.subscribe((ac) => {
        expect(ac).toEqual(outcome);
      });
    });

    it('should dispatch Add Products Action, on success', () => {
      mockAuthSelector.setResult({
        user: {
          email: 'abc@gmail.com',
          authError: false,
          loading: false,
        },
      });
      store.refreshState();
      const action = CartActions.placeOrder({});
      const outcome = CartActions.placeOrderSuccess({});
      actions$ = of(action);
      effects.cartOrderPlacedAction$.subscribe((ac) => {
        expect(ac).toEqual(outcome);
      });
    });
  });
});
