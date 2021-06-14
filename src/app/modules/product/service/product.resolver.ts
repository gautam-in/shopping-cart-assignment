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
import { ProductState } from '../models/product-state.model';
import { ProductActions } from '../store/actions/product.action.types';
import { selectProductState } from '../store/selectors/products.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<ProductState | Action> {
  constructor(private store: Store<AppState>, private actions$: Actions) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductState | Action> {
    return this.store.pipe(
      select(selectProductState),
      take(1),
      switchMap((productState) => {
        if (
          productState?.categoryWiseProducts &&
          Object.keys(productState?.categoryWiseProducts).length === 0 &&
          productState?.categoryWiseProducts.constructor === Object
        ) {
          this.store.dispatch(ProductActions.fetchProducts());
          return this.actions$.pipe(
            ofType(ProductActions.setProducts),
            take(1)
          );
        } else {
          return of(productState);
        }
      })
    );
  }
}
