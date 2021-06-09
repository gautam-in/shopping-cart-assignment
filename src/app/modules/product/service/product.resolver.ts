import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AppState } from 'src/app/models/app-state.model';
import { ProductState } from '../models/product-state.model';
import { FetchProducts, SET_PRODUCTS } from '../store/actions/product.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<ProductState | Action> {
  constructor(private store: Store<AppState>, private actions$: Actions) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductState | Action> {
    return this.store.select('products').pipe(
      take(1),
      switchMap((productState) => {
        if (productState.categoryWiseProducts.size === 0) {
          this.store.dispatch(new FetchProducts());
          return this.actions$.pipe(ofType(SET_PRODUCTS), take(1));
        } else {
          return of(productState);
        }
      })
    );
  }
}
