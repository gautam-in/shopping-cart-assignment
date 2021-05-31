import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import { FetchCategory, SET_CATEGORY } from '../store/categories.actions';
import { State as CategoryState } from '../store/category.reducer';
@Injectable({
  providedIn: 'root',
})
export class CategoryResolver implements Resolve<CategoryState | Action> {
  constructor(private store: Store<AppState>, private actions$: Actions) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CategoryState | Action> {
    return this.store.select('categories').pipe(
      take(1),
      switchMap((categoryState) => {
        if (categoryState.categories.length === 0) {
          this.store.dispatch(new FetchCategory());
          return this.actions$.pipe(ofType(SET_CATEGORY), take(1));
        } else {
          return of(categoryState);
        }
      })
    );
  }
}
