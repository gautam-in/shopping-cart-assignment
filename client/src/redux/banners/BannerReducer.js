import { UPDATE_BANNERS } from "./BannerActionTypes";

const banners = {
  data: [],
};

const bannerReducer = (state = banners, action) => {
  switch (action.type) {
    case UPDATE_BANNERS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default bannerReducer;
