import { FETCH_BANNERS_REQUEST, FETCH_BANNERS_SUCCESS, FETCH_BANNERS_FAILURE } from '../types';

const intialState = {
  loading: false,
  data: {},
  error: false
};

const bannersReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_BANNERS_REQUEST: {
      return {
        loading: true,
        data: {},
        error: false
      };
    }
    case FETCH_BANNERS_SUCCESS: {
      return {
        loading: false,
        data: action.banners.entities.data,
        error: false
      };
    }
    case FETCH_BANNERS_FAILURE: {
      return {
        loading: false,
        data: {},
        error: true
      };
    }
    default: {
      return state;
    }
  }
};

export default bannersReducer;
