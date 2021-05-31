import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  Banner,
  FetchBanner,
  FetchBannerError,
  FETCH_BANNER,
  SetBanners,
} from './banner.actions';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';

const handleSucess = (banners: Banner[]) => {
  return new SetBanners(banners);
};

const handleError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new FetchBannerError(errorMessage));
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = 'This email exists already';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'This email does not exist.';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'This password is not correct.';
      break;
  }
  return of(new FetchBannerError(errorMessage));
};

@Injectable()
export class BannerEffects {
  fetchBanners = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_BANNER),
      switchMap(() => {
        return this.http.get<Banner[]>(environment.server + '/banners').pipe(
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

  constructor(private actions$: Actions, private http: HttpClient) {}
}
