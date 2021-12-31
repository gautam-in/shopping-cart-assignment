import { HomeActionTypes } from './types';

const INITIAL_STATE = {
  banners: [],
  categories: [],
  error: null
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
    case HomeActionTypes.TRIGGER_NOTIFICATION:
      return {
        ...state,
        error: {...payload}
      }
    case HomeActionTypes.CLOSE_NOTIFICATION:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
};

export default homeReducer;