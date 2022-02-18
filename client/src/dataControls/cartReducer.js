import {ADD_QUANTITY, DELETE_QUANTITY, ADD_ITEM, REMOVE_ITEM} from './types';

export const initialState = {
  cart : []
}

export default function cartReducer (state = initialState, action) {
  switch(action.type){
    case ADD_QUANTITY: 
      return{
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? (item.qty = Number(item.qty) + 1)
            : item.qty
        )
      }
    
    case  DELETE_QUANTITY:
      return{
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? (item.qty = Number(item.qty) - 1)
            : item.qty
        )
      }
    
    case ADD_ITEM:
      return{
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
}
