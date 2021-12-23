import { GET_BANNER_ERROR, GET_BANNER_LOADING, GET_BANNER_SUCCESS } from '../actions/actionTypes';

const initialState = {
  bannerData: [
    {
      bannerImageAlt: '',
      bannerImageUrl: '',
      id: '',
      isActive: false,
      order: '',
    },
  ],
  error: { getBanner: null },
  loading: { getBanner: false },
};

export const getBannerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_BANNER_LOADING:
      return {
        ...state,
        loading: { ...state.loading, getBanner: true },
        error: { ...state.error, getBanner: null },
      };
    case GET_BANNER_SUCCESS:
      return {
        ...state,
        bannerData: action.payload,
        loading: { ...state.loading, getBanner: false },
      };
    case GET_BANNER_ERROR:
      return {
        ...state,
        loading: { ...state.loading, getBanner: false },
        error: { ...state.error, getBanner: action.payload },
      };
    default:
      return state;
  }
};
