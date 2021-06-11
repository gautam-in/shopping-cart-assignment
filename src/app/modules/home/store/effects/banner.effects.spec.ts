import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';
import { UtilService } from 'src/app/core/services/util.service';
import { ProductService } from 'src/app/modules/product/service/product.service';
import { Banner } from '../../models/banner.model';
import {
  FetchBanner,
  FetchBannerError,
  SetBanners,
} from '../actions/banner.actions';
import { BannerEffects } from './banner.effects';

describe('BannerEffects', () => {
  let effects: BannerEffects;
  let actions$ = new Observable<Action>();
  let service: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
      ],
      providers: [
        BannerEffects,
        UtilService,
        {
          provide: ProductService,
          useValue: jasmine.createSpyObj(ProductService, ['fetchBanners']),
        },
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(BannerEffects);
    service = TestBed.inject(ProductService);
  });

  it('can load instance', () => {
    expect(effects).toBeTruthy();
  });

  describe('fetchBanners', () => {
    const response: Banner[] = [
      {
        bannerImageUrl: '/static/images/offers/offer1.jpg',
        bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
        isActive: true,
        order: 1,
        id: '5b6c38156cb7d770b7010ccc',
      },
      {
        bannerImageUrl: '/static/images/offers/offer2.jpg',
        bannerImageAlt: 'Independence Day Deal - Rs120 off on surf',
        isActive: true,
        order: 2,
        id: '5b6c38336cb7d770b7010ccd',
      },
    ];
    it('should dispatch SetBanners Action, on success', () => {
      const action = new FetchBanner();
      actions$ = of(action);
      service.fetchBanners.and.returnValue(of(response));
      const outcome = new SetBanners(response);
      // subscribe to execute the Effect
      effects.fetchBanners.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });

    it('should dispatch FetchBannerError Action, on failure', () => {
      const action = new FetchBanner();
      actions$ = of(action);
      service.fetchBanners.and.returnValue(throwError(ErrorMsg.UNKNOWN_ERROR));
      const outcome = new FetchBannerError(ErrorMsg.UNKNOWN_ERROR);
      effects.fetchBanners.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });
  });

  describe('apiFailAction', () => {
    it('should fail ', () => {
      const action = new FetchBannerError(ErrorMsg.UNKNOWN_ERROR);
      actions$ = of(action);
      effects.restApiFailAction$.subscribe((action) => {
        expect(action.payload).toEqual(action.payload);
      });
    });
  });
});
