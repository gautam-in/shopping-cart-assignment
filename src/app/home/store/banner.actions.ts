import { Action } from '@ngrx/store';
const comp = '[Banner] ';
export const FETCH_BANNER = comp + 'Banner  Fetch';
export const SET_BANNER = comp + 'Banner  Set';
export const FETCH_BANNER_ERROR = comp + 'Banner  Error';

export interface Banner {
  bannerImageUrl: string;
  isActive: boolean;
  bannerImageAlt: string;
  order: number;
  id: string;
}
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
