import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ActivatedRouteSnapshot,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/app-state.model';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { selectBannerState } from '../store/selectors/banner.selectors';
import { BannerResolver } from './banner.resolver';
export const testAppState = {
  auth: {
    user: null,
    authError: '',
    loading: false,
  },
  banner: {
    banners: [],
    error: '',
    loading: false,
  },
  cart: {
    products: [],
  },
  categories: {
    categories: [],
    error: '',
    loading: false,
  },
  products: {
    allProducts: [],
    currentProducts: [],
    error: '',
    loading: false,
    categoryWiseProducts: {},
  },
  router: jasmine.createSpyObj(RouterState, ['']),
};
describe('BannerResolver', () => {
  let service: BannerResolver;
  let store: MockStore<AppState>;
  let actions$ = new Observable<Action>();
  let mockbannerSelector: any;
  const banners = [
    {
      bannerImageUrl: '/static/images/offers/offer1.jpg',
      bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
      isActive: true,
      order: 1,
      id: '5b6c38156cb7d770b7010ccc',
    },
  ];
  const initialState: AppState = { ...testAppState };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducer),
        AppEffectModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
      ],
      providers: [
        BannerResolver,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
      ],
    });
    service = TestBed.inject(BannerResolver);
    store = TestBed.inject(MockStore);
    mockbannerSelector = store.overrideSelector(selectBannerState, {
      banners: [],
      error: '',
      loading: false,
    });
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('makes expected calls when banner have not  values', () => {
      const routerStateSnapshotStub: RouterStateSnapshot = <any>{};
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = <any>{};
      const storeStub: MockStore = TestBed.inject(MockStore);
      const actionsStub: Actions = TestBed.inject(Actions);
      spyOn(actionsStub, 'pipe').and.callThrough();
      spyOn(storeStub, 'dispatch').and.callThrough();
      const res = service.resolve(
        activatedRouteSnapshotStub,
        routerStateSnapshotStub
      );
      res.subscribe((e) => {
        expect(e.banners.length).toBe(0);
      });
      expect(storeStub.dispatch).toHaveBeenCalled();
      expect(actionsStub.pipe).toHaveBeenCalled();
    });

    it('makes expected calls when banner have values', () => {
      const routerStateSnapshotStub: RouterStateSnapshot = <any>{};
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = <any>{};
      mockbannerSelector.setResult({
        banners: [...banners],
        error: '',
        loading: false,
      });
      store.refreshState();

      const res = service.resolve(
        activatedRouteSnapshotStub,
        routerStateSnapshotStub
      );
      res.subscribe((e) => {
        expect(e.banners.length).toBe(1);
      });
    });
  });
});
