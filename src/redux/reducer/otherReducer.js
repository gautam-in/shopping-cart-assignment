import { STORE_ALL_BANNER } from "../constants";

const otherReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case STORE_ALL_BANNER:
      return { ...state, banners: payload };
    default:
      return state;
  }
};

export default otherReducer;
