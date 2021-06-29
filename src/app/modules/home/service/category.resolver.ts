import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AppState } from 'src/app/models/app-state.model';
import { CategoryState } from '../models/category-state.model';
import { CategoryActions } from '../store/actions/categories.action.types';
import { selectCategoryState } from '../store/selectors/category.selectors';
@Injectable({
  providedIn: 'root',
})
export class CategoryResolver implements Resolve<CategoryState | Action> {
  constructor(private store: Store<AppState>, private actions$: Actions) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CategoryState | Action> {
    return this.store.pipe(
      select(selectCategoryState),
      take(1),
      switchMap((categoryState) => {
        if (categoryState.categories.length === 0) {
          this.store.dispatch(CategoryActions.fetchCategory());
          return this.actions$.pipe(
            ofType(CategoryActions.setCategories),
            take(1)
          );
        } else {
          return of(categoryState);
        }
      })
    );
  }
}
