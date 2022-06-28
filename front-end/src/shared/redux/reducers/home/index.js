import { HOME_ACTION_TYPES } from '../../actionTypes/home';

export const HOME_STATE = {
  banners: [],
  categories: [],
};

export const homeReducer = (
  state = HOME_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_ACTION_TYPES.FETCH_BANNER:
      return {
        ...state,
        banners: payload,
      };
    case HOME_ACTION_TYPES.FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload.length > 0 && payload.sort(function(a, b){return a.order-b.order}),
      };
    default:
      return state;
  }
};