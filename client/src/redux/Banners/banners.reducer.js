import * as ProductActions from "./banners.action";
let initialState = {
  banners: [],
  error: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActions.GET_ALL_BANNERS:
      return {
        ...state,
        banners: action.payload,
      };
    case ProductActions.GET_BANNERS_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
