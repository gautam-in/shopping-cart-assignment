import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SHOW_LOADER,
  } from './Types';
  
  export default (state, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        sessionStorage.setItem('isAuthenticated', true);
        sessionStorage.setItem('user',JSON.stringify(action.payload.email))
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: action.payload
        };
      case LOGIN_FAIL:
        sessionStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
        };
      case LOGOUT:
        sessionStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
        };
      case SHOW_LOADER:
        return {
          ...state,
          loading: action.payload
        }
      default:
        return state;
    }
  };