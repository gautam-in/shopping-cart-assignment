import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  FetchCategoryError,
  FETCH_CATEGORY,
  FETCH_CATEGORY_ERROR,
  SetCategories,
} from '../actions/categories.actions';
import { UtilService } from 'src/app/core/services/util.service';
import { Category } from '../../models/category.model';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';

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
    private util: UtilService
  ) {}
  fetchcategory = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_CATEGORY),
      switchMap(() => {
        return this.http
          .get<Category[]>(environment.server + '/categories')
          .pipe(
            map((resData: Category[]) => {
              return resData.map((e) => {
                let cat = { ...e };
                if (cat?.imageUrl?.startsWith('/static')) {
                  cat.imageUrl = cat.imageUrl.replace('/static', 'assets');
                }
                return cat;
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
