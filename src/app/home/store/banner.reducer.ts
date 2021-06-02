import { Banner, SET_BANNER } from './banner.actions';

export interface State {
  banners: Banner[];
  error: string | null;
  loading: boolean;
}

const initialState: State = {
  banners: [],
  error: null,
  loading: false,
};

export function bannerReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_BANNER:
      return {
        ...state,
        authError: null,
        banners: (action.payload as Banner[])
          .slice()
          .sort((a, b) => a.order - b.order)
          .filter((a) => a.isActive)
          .map((ele) => {
            let e = { ...ele };
            if (e?.bannerImageUrl.startsWith('/')) {
              e.bannerImageUrl = e.bannerImageUrl.slice(1);
            }
            return e;
          }),
        loading: false,
      };

    default:
      return state;
  }
}
