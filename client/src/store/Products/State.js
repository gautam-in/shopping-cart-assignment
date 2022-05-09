import React, { useReducer } from 'react';
import axios from "axios";
import Context from './Context';
import Reducer from './Reducer';
import {
    GET_PRODUCTS_DATA
} from './Types';

const State = props => {
  const initialState = {
    products: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getProductsData = async() => {
    try{
      let res = await axios.get('/products')
      if(res.data){
          dispatch({
              type: GET_PRODUCTS_DATA,
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
        products: state.products,
        getProductsData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;