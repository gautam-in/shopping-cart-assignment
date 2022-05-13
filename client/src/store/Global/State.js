import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';
import {
    INITIALIZE_LOADING
} from './Types';

const State = props => {
  const initialState = {
        loading: false
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

const initializeLoading = (data) => {
          dispatch({
              type: INITIALIZE_LOADING,
              payload: data
        });
  };

  return (
    <Context.Provider
      value={{
        loading: state.loading,
        initializeLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;