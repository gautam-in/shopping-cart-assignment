import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Action, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of, throwError } from 'rxjs';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';
import { UtilService } from 'src/app/core/services/util.service';
import { AppState } from 'src/app/models/app-state.model';
import { testAppState } from 'src/app/modules/home/service/banner.resolver.spec';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { ProductState } from '../../models/product-state.model';
import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product.service';
import { ProductActions } from '../actions/product.action.types';
import {
  fetchProducts,
  fetchProductsError,
  setProducts,
} from '../actions/product.actions';
import { selectProductState } from '../selectors/products.selectors';
import { ProductEffects } from './product.effects';
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
const products: ProductState = {
  allProducts: [...response],
  currentProducts: [...response],
  error: '',
  loading: false,
  categoryWiseProducts: {
    '5b6899953d1a866534f516e2': [...response],
  },
  filterBy: '5b6899953d1a866534f516e2',
};
describe('ProductEffects', () => {
  let effects: ProductEffects;
  let service: any;
  let actions$ = new Observable<Action>();
  let store: MockStore<AppState>;
  const initialState: AppState = {
    ...testAppState,
    products,
    cart: {
      products: [],
    },
  };

  let mockProductSelector: any;

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
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(ProductEffects);
    service = TestBed.inject(ProductService);
    store = TestBed.inject(MockStore);
    mockProductSelector = store.overrideSelector(selectProductState, {
      allProducts: [],
      currentProducts: [],
      error: '',
      loading: false,
      categoryWiseProducts: {},
    });
  });

  it('can load instance', () => {
    expect(effects).toBeTruthy();
  });

  describe('fetchProducts', () => {
    it('should dispatch SetProducts Action, on success', () => {
      const action = fetchProducts();
      actions$ = of(action);
      service.fetchProducts.and.returnValue(of(response));
      const outcome = setProducts({ payload: response });
      // subscribe to execute the Effect
      effects.fetchProducts.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });

    it('should dispatch FetchProductsError Action, on failure', () => {
      const action = fetchProducts();
      actions$ = of(action);
      const outcome = fetchProductsError({ payload: ErrorMsg.UNKNOWN_ERROR });
      service.fetchProducts.and.returnValue(throwError(ErrorMsg.UNKNOWN_ERROR));
      effects.fetchProducts.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });
    it('should dispatch FetchProductsError Action, on failure', () => {
      const action = fetchProducts();
      actions$ = of(action);
      service.fetchProducts.and.returnValue(
        throwError({
          error: {
            error: ErrorMsg.UNKNOWN_ERROR,
          },
        })
      );
      const outcome = fetchProductsError({ payload: ErrorMsg.UNKNOWN_ERROR });
      effects.fetchProducts.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });
  });

  describe('setProducts', () => {
    it('should dispatch filterBy Action, when product state have filter by ', () => {
      const action = ProductActions.setProducts({
        payload: [...products.currentProducts],
      });
      actions$ = of(action);
      mockProductSelector.setResult(products);
      store.refreshState();
      const outcome = ProductActions.filterBy({
        payload: '5b6899953d1a866534f516e2',
      });
      // subscribe to execute the Effect
      effects.setProducts.subscribe((action) => {
        console.log(action);
        expect(action).toEqual(outcome);
      });
    });

    it('should not emit filter by action ', () => {
      const action = ProductActions.setProducts({
        payload: [],
      });
      actions$ = of(action);
      const outcome = { type: 'Dummy' };
      // subscribe to execute the Effect
      effects.setProducts.subscribe((action) => {
        console.log(action);
        expect(action).toEqual(outcome);
      });
    });

    it('should emit fetchProductError Action ', () => {
      const action = ProductActions.setProducts({
        payload: [],
      });
      actions$ = of(action);
      const outcome = { type: 'Dummy' };
      // subscribe to execute the Effect
      effects.setProducts.subscribe((action) => {
        console.log(action);
        expect(action).toEqual(outcome);
      });
    });
  });

  describe('FilterBy', () => {
    it('it Filter only by products', () => {
      actions$ = of({
        type: ROUTER_NAVIGATION,
        payload: {
          routerState: {
            url: '/products',
            queryParams: {
              categoryId: '5b6899953d1a866534f516e2',
            },
          },
        },
      });
      let router = jasmine.createSpyObj(Router, ['navigate']);

      router.navigate(['/products'], {
        queryParams: {
          categoryId: '5b6899953d1a866534f516e2',
        },
      });

      effects.loadProductsByCategoryActions$.subscribe((action) => {
        console.log(action);
        expect(action).toBeTruthy();
        expect(router.navigate).toHaveBeenCalledWith(['/products'], {
          queryParams: {
            categoryId: '5b6899953d1a866534f516e2',
          },
        });
      });
    });
  });
});
