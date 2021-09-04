import { GET_BANNERS } from "../actions/types";

const bannerState = {
  bannerList: [],
};

export const bannerReducer = (state = bannerState, action) => {
  switch (action.type) {
    case GET_BANNERS:
      return { ...state, bannerList: action.payload };
    default:
      return state;
  }
};
