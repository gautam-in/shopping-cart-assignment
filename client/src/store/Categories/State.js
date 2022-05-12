import React, { useReducer } from 'react';
import axios from "axios";
import Context from './Context';
import Reducer from './Reducer';
import {
    GET_CATEGORIES_DATA,
    SET_CATEGORY_ID
} from './Types';

const State = props => {
  const initialState = {
    categories: [],
    categoryId: ''
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getCategories = async() => {
    try{
      let res = await axios.get('/categories')
      if(res.data){
          dispatch({
              type: GET_CATEGORIES_DATA,
              payload: res.data
          });
      }
    }catch(error){
      console.log(error)
    }
  };

  const setCategoryId = async(data) => {
    dispatch({
        type: SET_CATEGORY_ID,
        payload: data
    });
  }

  return (
    <Context.Provider
      value={{
        categories: state.categories,
        categoryId: state.categoryId,
        getCategories,
        setCategoryId
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;