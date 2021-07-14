import { GET_BANNER } from "./actionType";
let bannerState = {
  banners: [],
};

const bannerReducer = (state = bannerState, action) => {
  switch (action.type) {
    case GET_BANNER:
      return {
        ...state,
        banners: action.payload,
      };
    default:
      return state;
  }
};

export default bannerReducer;
