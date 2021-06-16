import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/app-state.model';
import { testAppState } from '../../home/service/banner.resolver.spec';
import { testingProducts } from '../product-list/product-list.component.spec';
import { selectProductState } from '../store/selectors/products.selectors';
import { ProductResolver } from './product.resolver';

describe('ProductResolver', () => {
  let service: ProductResolver;
  let store: MockStore<AppState>;
  const initialState = {
    ...testAppState,
  };
  let actions$ = new Observable<Action>();
  let mockProductSelector: any;

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
    mockProductSelector = store.overrideSelector(selectProductState, {
      ...testAppState.products,
    });
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
      spyOn(storeStub, 'dispatch').and.callThrough();
      const res = service.resolve(
        activatedRouteSnapshotStub,
        routerStateSnapshotStub
      );
      res.subscribe((e: any) => {
        expect(Object.entries(e.categoryWiseProducts).length).toBe(0);
      });
      expect(actionsStub.pipe).toHaveBeenCalled();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });

    it('makes expected calls when banner have values', () => {
      const routerStateSnapshotStub: RouterStateSnapshot = <any>{};
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = <any>{};
      mockProductSelector.setResult({
        ...testingProducts,
      });
      store.refreshState();

      const res = service.resolve(
        activatedRouteSnapshotStub,
        routerStateSnapshotStub
      );
      res.subscribe((e: any) => {
        expect(Object.entries(e.categoryWiseProducts).length).toBe(1);
      });
    });
  });
});
