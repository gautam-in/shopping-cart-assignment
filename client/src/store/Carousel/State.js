import React, { useReducer } from 'react';
import axios from "axios";
import Context from './Context';
import Reducer from './Reducer';
import {
    GET_CAROUSEL_DATA
} from './Types';

const State = props => {
  const initialState = {
    carousel: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getCarouselData = async() => {
    try{
      let res = await axios.get('/banners')
      if(res.data){
          dispatch({
              type: GET_CAROUSEL_DATA,
              payload: res.data
          });
      }
    }catch(error){
      console.log(error)
    }

  };

  return (
    <Context.Provider
      value={{
        carousel: state.carousel,
        getCarouselData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;