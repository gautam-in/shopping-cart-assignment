import { Action } from '@ngrx/store';
import { Banner } from '../../models/banner.model';
const comp = '[Banner] ';
export const FETCH_BANNER = comp + 'Banner  Fetch';
export const SET_BANNER = comp + 'Banner  Set';
export const FETCH_BANNER_ERROR = comp + 'Banner  Error';

export class FetchBanner implements Action {
  readonly type = FETCH_BANNER;
}

export class SetBanners implements Action {
  readonly type = SET_BANNER;

  constructor(public payload: Banner[]) {}
}

export class FetchBannerError implements Action {
  readonly type = FETCH_BANNER_ERROR;
  constructor(public payload: string) {}
}

export type BannerActions = FetchBanner | FetchBannerError | SetBanners;
