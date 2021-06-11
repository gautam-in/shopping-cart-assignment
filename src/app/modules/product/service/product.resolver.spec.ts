import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { ProductResolver } from './product.resolver';

describe('ProductResolver', () => {
  let service: ProductResolver;
  let store: MockStore;
  const initialState = {
    allProducts: [
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
      },
    ],
    currentProducts: [
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
      },
    ],
    error: '',
    loading: false,
    categoryWiseProducts: new Map().set('5b6c6aeb01a7c38429530884', {
      name: 'Apple - Washington, Regular, 4 pcs',
      imageURL: '/static/images/products/fruit-n-veg/apple.jpg',
      description:
        'The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.',
      price: 187,
      stock: 50,
      category: '5b6899953d1a866534f516e2',
      sku: 'fnw-apple-4',
      id: '5b6c6aeb01a7c38429530884',
    }),
  };
  let actions$ = new Observable<Action>();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductResolver,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
      ],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(ProductResolver);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('makes expected calls', () => {
      const routerStateSnapshotStub: RouterStateSnapshot = <any>{};
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = <any>{};
      const actionsStub: Actions = TestBed.inject(Actions);
      const storeStub: MockStore = TestBed.inject(MockStore);
      spyOn(actionsStub, 'pipe').and.callThrough();
      spyOn(storeStub, 'select').and.callThrough();
      spyOn(storeStub, 'dispatch').and.callThrough();
      service.resolve(activatedRouteSnapshotStub, routerStateSnapshotStub);
      expect(actionsStub.pipe).not.toHaveBeenCalled();
      expect(storeStub.select).toHaveBeenCalled();
      expect(storeStub.dispatch).not.toHaveBeenCalled();
    });
  });
});
