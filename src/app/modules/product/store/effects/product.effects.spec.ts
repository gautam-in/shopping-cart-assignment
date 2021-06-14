import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Action, StoreModule } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';
import { UtilService } from 'src/app/core/services/util.service';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product.service';
import {
  fetchProducts,
  fetchProductsError,
  setProducts,
} from '../actions/product.actions';
import { ProductEffects } from './product.effects';

describe('ProductEffects', () => {
  let effects: ProductEffects;
  let service: any;
  let actions$ = new Observable<Action>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducer),
        AppEffectModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
      ],
      providers: [
        ProductEffects,
        UtilService,
        {
          provide: ProductService,
          useValue: jasmine.createSpyObj(ProductService, ['fetchProducts']),
        },
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(ProductEffects);
    service = TestBed.inject(ProductService);
  });

  it('can load instance', () => {
    expect(effects).toBeTruthy();
  });

  describe('fetchProducts', () => {
    const response: Product[] = [
      {
        name: 'Fresho Kiwi - Green, 3 pcs',
        imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
        description:
          'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
        price: 87,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-kiwi-3',
        id: '5b6c6a7f01a7c38429530883',
        productInCart: 2,
      },
      {
        name: 'Apple - Washington, Regular, 4 pcs',
        imageURL: '/static/images/products/fruit-n-veg/apple.jpg',
        description:
          'The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.',
        price: 187,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-apple-4',
        id: '5b6c6aeb01a7c38429530884',
        productInCart: 5,
      },
    ];
    it('should dispatch SetProducts Action, on success', () => {
      const action = new fetchProducts();
      actions$ = of(action);
      service.fetchProducts.and.returnValue(of(response));
      const outcome = new setProducts(response);
      // subscribe to execute the Effect
      effects.fetchProducts.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });

    it('should dispatch FetchProductsError Action, on failure', () => {
      const action = new fetchProducts();
      actions$ = of(action);
      service.fetchProducts.and.returnValue(throwError(ErrorMsg.UNKNOWN_ERROR));
      const outcome = new fetchProductsError(ErrorMsg.UNKNOWN_ERROR);

      // subscribe to execute the Effect
      effects.fetchProducts.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });
  });

  describe('FilterBy', () => {
    it('it Filter only by products', () => {
      actions$ = of({ type: ROUTER_NAVIGATION });
      effects.loadProductsByCategoryActions$.subscribe((action) => {
        expect(action).toBeTruthy();
      });
    });
  });
});
