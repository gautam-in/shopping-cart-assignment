import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  USER_LOGOUT_SUCESS,
} from '../types';

const intialState = {
  loading: false,
  data: {},
  error: false,
};

const categories = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST: {
      return {
        loading: true,
        data: {},
        error: false,
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        loading: false,
        data: action.user,
        error: false,
      };
    }
    case FETCH_USER_FAILURE: {
      return {
        loading: false,
        data: {},
        error: true,
      };
    }
    case USER_LOGOUT_SUCESS: {
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
