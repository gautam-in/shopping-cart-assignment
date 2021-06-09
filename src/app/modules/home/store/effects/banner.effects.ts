import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UtilService } from 'src/app/core/services/util.service';
import { ProductService } from 'src/app/modules/product/service/product.service';
import { Banner } from '../../models/banner.model';
import {
  FetchBannerError,
  FETCH_BANNER,
  FETCH_BANNER_ERROR,
  SetBanners,
} from '../actions/banner.actions';

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
    private util: UtilService,
    private productService: ProductService
  ) {}
  fetchBanners = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_BANNER),
      switchMap((_) => this.productService.fetchBanners()),
      map((resData) => {
        return handleSucess(resData);
      }),
      catchError((errorRes) => {
        return handleError(errorRes);
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
