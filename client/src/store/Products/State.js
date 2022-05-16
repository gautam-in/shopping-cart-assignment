import React, { useReducer, useContext } from 'react';
import axios from "axios";
import Context from './Context';
import Reducer from './Reducer';
import GlobalContext from "../Global/Context";
import {
    GET_PRODUCTS_DATA,
    SET_FILTER_PRODUCTS_DATA
} from './Types';

const State = props => {
  const initialState = {
    products: [],
    filterProducts: []
  };

  const [state, dispatch] = useReducer(Reducer, initialState);
  const globalContext = useContext(GlobalContext);
  const { initializeLoading } = globalContext;

  const getProducts = async() => {
    try{
      initializeLoading(true)
      let res = await axios.get('/products')
      if(res.data){
          dispatch({
              type: GET_PRODUCTS_DATA,
              payload: res.data
          });
      }
    }catch(error){
      console.log("getProducts",error)
    } finally {
      initializeLoading(false)
    }
  };

  const setFilterProducts = (data) => {
    dispatch({
      type: SET_FILTER_PRODUCTS_DATA,
      payload: data
  });
  }

  return (
    <Context.Provider
      value={{
        products: state.products,
        filterProducts: state.filterProducts,
        getProducts,
        setFilterProducts
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;