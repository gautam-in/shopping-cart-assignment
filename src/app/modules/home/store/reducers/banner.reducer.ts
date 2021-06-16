import { createReducer, on } from '@ngrx/store';
import { BannerState } from '../../models/banner-state.model';
import { BannerActions } from '../actions/banner.action.types';

const initialState: BannerState = {
  banners: [],
  error: '',
  loading: false,
};

export const bannerReducer = createReducer(
  initialState,
  on(BannerActions.setBanners, (state, action) => {
    return {
      ...state,
      ...initialState,
      banners: action.payload
        .slice()
        .sort((a, b) => a.order - b.order)
        .filter((a) => a.isActive),
    };
  })
);
