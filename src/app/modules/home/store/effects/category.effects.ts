import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';
import { UtilService } from 'src/app/core/services/util.service';
import { ProductService } from 'src/app/modules/product/service/product.service';
import { environment } from 'src/environments/environment';
import { Category } from '../../models/category.model';
import {
  FetchCategoryError,
  FETCH_CATEGORY,
  FETCH_CATEGORY_ERROR,
  SetCategories,
} from '../actions/categories.actions';

const handleSucess = (categories: Category[]) => {
  return new SetCategories(categories);
};

const handleError = (errorRes: HttpErrorResponse) => {
  let errorMessage = errorRes?.message || ErrorMsg.UNKNOWN_ERROR;
  if (!errorRes.error || !errorRes.error.error) {
    return of(new FetchCategoryError(errorMessage));
  }

  return of(new FetchCategoryError(errorMessage));
};

@Injectable()
export class CategoryEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private util: UtilService,
    private productService: ProductService
  ) {}
  fetchcategory = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_CATEGORY),
      switchMap((_) => this.productService.fetchCategories()),
      map((resData) => {
        return handleSucess(resData);
      }),
      catchError((errorRes) => {
        return handleError(errorRes);
      })
    )
  );

  apiFailAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FETCH_CATEGORY_ERROR),
        tap((e: any) => {
          this.util.openSnackBar(e.payload);
        })
      ),
    { dispatch: false }
  );
}
