import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';
import { UtilService } from 'src/app/core/services/util.service';
import { ProductService } from 'src/app/modules/product/service/product.service';
import { Category } from '../../models/category.model';
import { CategoryActions } from '../actions/categories.action.types';

const handleSucess = (categories: Category[]) => {
  return CategoryActions.setCategories({ payload: categories });
};

const handleError = (errorRes: HttpErrorResponse) => {
  let errorMessage = errorRes?.message || ErrorMsg.UNKNOWN_ERROR;
  if (!errorRes.error || !errorRes.error.error) {
    return of(CategoryActions.fetchCategoryError({ payload: errorMessage }));
  }

  return of(CategoryActions.fetchCategoryError({ payload: errorMessage }));
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
      ofType(CategoryActions.fetchCategory),
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
        ofType(CategoryActions.fetchCategoryError),
        tap((e: any) => {
          this.util.openSnackBar(e.payload);
        })
      ),
    { dispatch: false }
  );
}
