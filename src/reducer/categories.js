import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from '../utils/types';

const intialState = {
  loading: false,
  data: {},
  error: false
};

const categories = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST: {
      return {
        loading: true,
        data: {},
        error: false
      };
    }
    case FETCH_CATEGORIES_SUCCESS: {
      return {
        loading: false,
        data: action.categories.entities.data,
        error: false
      };
    }
    case FETCH_CATEGORIES_FAILURE: {
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

export default categories;
