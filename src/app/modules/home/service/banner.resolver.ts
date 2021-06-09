import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AppState } from 'src/app/models/app-state.model';
import { Banner } from '../models/banner.model';
import { FetchBanner, SET_BANNER } from '../store/actions/banner.actions';

@Injectable({
  providedIn: 'root',
})
export class BannerResolver implements Resolve<Banner[]> {
  constructor(private store: Store<AppState>, private actions$: Actions) {}

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
