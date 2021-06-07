import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  FetchBannerError,
  FETCH_BANNER,
  FETCH_BANNER_ERROR,
  SetBanners,
} from '../actions/banner.actions';
import { UtilService } from 'src/app/core/services/util.service';
import { Banner } from '../../models/banner.model';

const handleSucess = (banners: Banner[]) => {
  return new SetBanners(banners);
};

const handleError = (errorRes: HttpErrorResponse) => {
  let errorMessage = errorRes.message || 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new FetchBannerError(errorMessage));
  }

  return of(new FetchBannerError(errorMessage));
};

@Injectable()
export class BannerEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private util: UtilService
  ) {}
  fetchBanners = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_BANNER),
      switchMap(() => {
        return this.http.get<Banner[]>(environment.server + '/banners').pipe(
          map((resData: Banner[]) => {
            return resData.map((e) => {
              if (e?.bannerImageUrl?.startsWith('/static')) {
                e.bannerImageUrl = e.bannerImageUrl.replace(
                  '/static',
                  'assets'
                );
              }
              return e;
            });
          }),
          map((resData) => {
            return handleSucess(resData);
          }),
          catchError((errorRes) => {
            return handleError(errorRes);
          })
        );
      })
    )
  );

  restApiFailAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FETCH_BANNER_ERROR),
        tap((e: any) => {
          this.util.openSnackBar(e.payload);
        })
      ),
    { dispatch: false }
  );
}
