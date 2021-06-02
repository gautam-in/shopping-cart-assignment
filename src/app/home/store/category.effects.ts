import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  Category,
  FetchCategoryError,
  FETCH_CATEGORY,
  FETCH_CATEGORY_ERROR,
  SetCategories,
} from './categories.actions';
import { UtilService } from 'src/app/services/util.service';

const handleSucess = (categories: Category[]) => {
  return new SetCategories(categories);
};

const handleError = (errorRes: HttpErrorResponse) => {
  let errorMessage = errorRes?.message || 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new FetchCategoryError(errorMessage));
  }

  return of(new FetchCategoryError(errorMessage));
};

@Injectable()
export class CategoryEffects {
  fetchcategory = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_CATEGORY),
      switchMap(() => {
        return this.http
          .get<Category[]>(environment.server + '/categories')
          .pipe(
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

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private util: UtilService
  ) {}
}
