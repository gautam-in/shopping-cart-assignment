import {
  SABKABAZAAR_FETCH_CATEGORIES_REQUEST,
  SABKABAZAAR_FETCH_CATEGORIES_SUCCESS,
  SABKABAZAAR_FETCH_CATEGORIES_FAILURE,
} from '../actions';

const intialState = {
  loading: false,
  data: {},
  error: false,
};

const categories = (state = intialState, action) => {
  switch (action.type) {
    case SABKABAZAAR_FETCH_CATEGORIES_REQUEST: {
      return {
        loading: true,
        data: {},
        error: false,
      };
    }
    case SABKABAZAAR_FETCH_CATEGORIES_SUCCESS: {
      return {
        loading: false,
        data: action.categories.entities.data,
        error: false,
      };
    }
    case SABKABAZAAR_FETCH_CATEGORIES_FAILURE: {
      return {
        loading: false,
        data: {},
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default categories;
