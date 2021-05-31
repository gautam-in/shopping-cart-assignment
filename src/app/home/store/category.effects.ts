import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  Category,
  FetchCategoryError,
  FETCH_CATEGORY,
  SetCategories,
} from './categories.actions';

const handleSucess = (categories: Category[]) => {
  return new SetCategories(categories);
};

const handleError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new FetchCategoryError(errorMessage));
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

  constructor(private actions$: Actions, private http: HttpClient) {}
}
