import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  Banner,
  FetchBanner,
  SetBanners,
  SET_BANNER,
} from '../store/banner.actions';
import * as fromApp from '../../store/app.reducer';
import { Actions, ofType } from '@ngrx/effects';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BannerResolver implements Resolve<Banner[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.select('banner').pipe(
      take(1),
      switchMap((bannerState) => {
        if (bannerState.banners.length === 0) {
          this.store.dispatch(new FetchBanner());
          return this.actions$.pipe(ofType(SET_BANNER), take(1));
        } else {
          return of(bannerState);
        }
      })
    );
  }
}
