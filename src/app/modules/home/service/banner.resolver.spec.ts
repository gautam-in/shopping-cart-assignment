import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { fetchBanner } from '../store/actions/banner.actions';
import { BannerResolver } from './banner.resolver';

describe('BannerResolver', () => {
  let service: BannerResolver;
  let store: MockStore;
  let actions$ = new Observable<Action>();
  const initialState = {
    banners: [
      {
        bannerImageUrl: '/static/images/offers/offer1.jpg',
        bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
        isActive: true,
        order: 1,
        id: '5b6c38156cb7d770b7010ccc',
      },
    ],
    error: '',
    loading: false,
  };

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
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('makes expected calls', () => {
      const routerStateSnapshotStub: RouterStateSnapshot = <any>{};
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = <any>{};
      const storeStub: MockStore = TestBed.inject(MockStore);
      const actionsStub: Actions = TestBed.inject(Actions);
      spyOn(storeStub, 'select').and.callThrough();
      storeStub.select('banner');
      spyOn(storeStub, 'dispatch').and.callThrough();
      storeStub.dispatch(new fetchBanner());
      spyOn(actionsStub, 'pipe').and.callThrough();
      actionsStub.pipe(take(1));
      service.resolve(activatedRouteSnapshotStub, routerStateSnapshotStub);
      expect(storeStub.select).toHaveBeenCalled();
      expect(storeStub.dispatch).toHaveBeenCalled();
      expect(actionsStub.pipe).toHaveBeenCalled();
    });
  });
});
