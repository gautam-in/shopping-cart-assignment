import { BannerState } from '../../models/banner-state.model';
import { Banner } from '../../models/banner.model';
import { SET_BANNER } from '../actions/banner.actions';

const initialState: BannerState = {
  banners: [],
  error: '',
  loading: false,
};

export function bannerReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_BANNER:
      return {
        ...state,
        ...initialState,
        banners: (action.payload as Banner[])
          .slice()
          .sort((a, b) => a.order - b.order)
          .filter((a) => a.isActive),
      };
    default:
      return state;
  }
}
