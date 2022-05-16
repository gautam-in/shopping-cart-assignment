import React, { useReducer, useContext } from "react";
import axios from "axios";
import Context from "./Context";
import Reducer from "./Reducer";
import GlobalContext from "../Global/Context";
import { GET_CATEGORIES_DATA, SET_CATEGORY_ID } from "./Types";

const State = (props) => {
  const initialState = {
    categories: [],
    categoryId: "",
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const globalContext = useContext(GlobalContext);

  const { initializeLoading } = globalContext;

  const getCategories = async () => {
    try {
      initializeLoading(true);
      let res = await axios.get("/categories");
      if (res.data) {
        dispatch({
          type: GET_CATEGORIES_DATA,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log("getCategories",error);
    } finally {
      initializeLoading(false)
    }
  };

  const setCategoryId = async (data) => {
    dispatch({
      type: SET_CATEGORY_ID,
      payload: data,
    });
  };

  return (
    <Context.Provider
      value={{
        categories: state.categories,
        categoryId: state.categoryId,
        getCategories,
        setCategoryId,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
