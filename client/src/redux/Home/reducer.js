import { HomeActionTypes } from './types';

const INITIAL_STATE = {
  banners: [],
  categories: []
}

const homeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch(type) {
    case HomeActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [...payload]
      }
    case HomeActionTypes.FETCH_BANNERS_SUCCESS:
      return {
        ...state,
        banners: [...payload]
      }
    default:
      return state;
  }
};

export default homeReducer;