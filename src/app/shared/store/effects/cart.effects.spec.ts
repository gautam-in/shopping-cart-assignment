import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of, throwError } from 'rxjs';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';
import { UtilService } from 'src/app/core/services/util.service';
import { ProductService } from 'src/app/modules/product/service/product.service';
import { CartProductModel } from '../../models/cart-product.model';
import { CartState } from '../../models/cart-state.model';
import { MaterialModule } from '../../modules/material.module';
import {
  addCartError,
  addCartSuccess,
  addProduct,
} from '../actions/cart-list.actions';
import { CartEffects } from './cart.effects';

describe('CartEffects', () => {
  let effects: CartEffects;
  let store: MockStore;
  let service: any;
  const initialState: CartState = {
    products: [],
  };
  let actions$ = new Observable<Action>();

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
  });

  it('can load instance', () => {
    expect(effects).toBeTruthy();
  });

  describe('addProductAction', () => {
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

    const response = {
      response: 'Success',
      responseMessage: 'Product added to cart successfully',
    };
    it('should dispatch SetBanners Action, on success', () => {
      const action = new addProduct(cartProduct, 2);
      actions$ = of(action);
      service.addToCart.and.returnValue(of(response));
      const outcome = new addCartSuccess(response.responseMessage);
      // subscribe to execute the Effect
      effects.addProductAction.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });

    it('should dispatch AddCartError Action, on failure', () => {
      const action = new addProduct(cartProduct, 2);
      actions$ = of(action);
      service.addToCart.and.returnValue(throwError(ErrorMsg.UNKNOWN_ERROR));
      const outcome = new addCartError(ErrorMsg.UNKNOWN_ERROR);
      effects.addProductAction.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });
  });
});
