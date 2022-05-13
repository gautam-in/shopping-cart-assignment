import React, { useReducer, useContext } from 'react';
import axios from "axios";
import Context from './Context';
import Reducer from './Reducer';
import GlobalContext from "../Global/Context";

import {
    GET_CAROUSEL_DATA,
    CLEAR_CAROUSEL_DATA
} from './Types';

const State = props => {
  const initialState = {
    carousel: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);
  const globalContext = useContext(GlobalContext);
  const { initializeLoading } = globalContext;


  const getCarouselData = async() => {
    try{
      initializeLoading(true)
      let res = await axios.get('/banners')
      if(res.data){
          dispatch({
              type: GET_CAROUSEL_DATA,
              payload: res.data
          });
      }
    }catch(error){
      console.log(error)
    } finally {
      initializeLoading(false)
    }
  };

  const clearCarouselData = () => {
    dispatch({
      type: CLEAR_CAROUSEL_DATA,
  });
  };

  return (
    <Context.Provider
      value={{
        carousel: state.carousel,
        getCarouselData,
        clearCarouselData
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;