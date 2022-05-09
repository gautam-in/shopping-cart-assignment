import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';
import {
  LOGIN_SUCCESS,
//   LOGIN_FAIL,
  LOGOUT,
  SHOW_LOADER,
} from './Types';

const State = props => {
  const initialState = {
    isAuthenticated: sessionStorage.getItem('isAuthenticated') || false,
    loading: false,
    user: JSON.parse(sessionStorage.getItem('user')) || null
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  
  // Login User
  const authenticationSucess = (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data
      });
  };

//   const loginError = (err) => {

//     console.log("i am called")
//     dispatch({
//       type: LOGIN_FAIL,
//       payload: true
//     });
//   }

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  const showLoader = () => {
    dispatch({
      type: SHOW_LOADER,
      payload: true
    });
  }

  return (
    <Context.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        authenticationSucess,
        // loginError,
        logout,
        showLoader,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;