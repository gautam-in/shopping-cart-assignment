import React, { useReducer } from 'react';
import axios from 'axios';
import Context from './Context';
import Reducer from './Reducer';
import {
    OPEN_CART_MODAL,
    CLOSE_CART_MODAL,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    UPDATE_CART_QUANTITY_AND_TOTAL,
    CLEAR_CART
} from './Types';

const SUCCESS_RESPONSE = 'Success'

const State = props => {
  const initialState = {
    cartItems: JSON.parse(sessionStorage.getItem('cart')) || [],
    cartModalState: false,
    cartTotalAmount: null,
    cartTotalQuantity: null
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const openCartModal = () => {
        dispatch({
            type: OPEN_CART_MODAL,
        });
  };

  const closeCartModal = () => {
        dispatch({
            type: CLOSE_CART_MODAL,
        });
  };

  const addCartItem = async (data) => {
    try{
      let res = await axios.post('/addToCart',{
        product: data.id
      })
      if(res.data && res.data.response === SUCCESS_RESPONSE){
        dispatch({
          type: ADD_CART_ITEM,
          payload: data
        });
      }
    }catch(error){
      console.log("addCartItem",error)
    }

  }

  const removeCartItem = async (data) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: data
    });
  }

  const updateCartQuantityAndTotal = (data) => {
    dispatch({
      type: UPDATE_CART_QUANTITY_AND_TOTAL,
      payload: data,
    });
  }

  const clearCart = (data) => {
    dispatch({
      type: CLEAR_CART,
    });
  }
  
  return (
    <Context.Provider
      value={{
        cartItems: state.cartItems,
        cartModalState: state.cartModalState,
        cartTotalAmount: state.cartTotalAmount,
        cartTotalQuantity: state.cartTotalQuantity,
        openCartModal,
        closeCartModal,
        addCartItem,
        removeCartItem,
        updateCartQuantityAndTotal,
        clearCart
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;