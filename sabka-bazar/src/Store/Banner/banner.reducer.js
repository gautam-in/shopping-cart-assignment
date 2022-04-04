import { BANNERS, BANNERS_SUCCESS, BANNERS_FAILURE } from "./banner.action";

const initialState = {
  allBanners: [],
};

export default function banners(state = initialState, action) {
  switch (action.type) {
    case BANNERS:
      return { ...state };
    case BANNERS_SUCCESS:
      return {
        ...state,
        allBanners: action.payload,
      };
    case BANNERS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
