import { createAction, props } from '@ngrx/store';
import { Banner } from '../../models/banner.model';
const comp = '[Banner] ';
const FETCH_BANNER = comp + 'Banner  Fetch';
const SET_BANNER = comp + 'Banner  Set';
const FETCH_BANNER_ERROR = comp + 'Banner  Error';

export const fetchBanner = createAction(FETCH_BANNER);

export const setBanners = createAction(
  SET_BANNER,
  props<{ payload: Banner[] }>()
);

export const fetchBannerError = createAction(
  FETCH_BANNER_ERROR,
  props<{ payload: string }>()
);
