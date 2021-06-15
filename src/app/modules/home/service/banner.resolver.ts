import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { AppState } from 'src/app/models/app-state.model';
import { Banner } from '../models/banner.model';
import { BannerActions } from '../store/actions/banner.action.types';
import { fetchBanner } from '../store/actions/banner.actions';
import { selectBannerState } from '../store/selectors/banner.selectors';

@Injectable({
  providedIn: 'root',
})
export class BannerResolver implements Resolve<Banner[]> {
  constructor(private store: Store<AppState>, private actions$: Actions) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log(this.store, 'store');

    return this.store.pipe(
      tap((e) => {
        console.log(e);
      }),
      select(selectBannerState),
      take(1),
      switchMap((bannerState) => {
        console.log(bannerState);
        if (bannerState.banners.length === 0) {
          this.store.dispatch(BannerActions.fetchBanner());
          return this.actions$.pipe(ofType(BannerActions.setBanners), take(1));
        } else {
          return of(bannerState);
        }
      })
    );
  }
}
