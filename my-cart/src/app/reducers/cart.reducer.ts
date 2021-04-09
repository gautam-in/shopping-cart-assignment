import { Product } from "../model/Products.model";
import { CartState } from "../products/ProductState";
import * as productActionTypes from '../products/product-actions-types';


const InitialState: CartState = {
  addedProducts: {}
}

export function CartReducer(state = InitialState, action: { type: string, payload?: any }) {
  let newCartItems: any;
  let increasedQuantity;
  switch (action.type) {
    case productActionTypes.INC_CART_ITEM_QTY: // INCREASE ITEM QUANTITY

      if (state.addedProducts[action.payload.id]) { // ITEM ALREADY ADDED 
        increasedQuantity = state.addedProducts[action.payload.id].quantity + 1;
        newCartItems = { ...state.addedProducts, [action.payload.id]: { ...action.payload, quantity: increasedQuantity } }
      } else { // ITEM NOT ADDED
        newCartItems = { ...state.addedProducts, [action.payload.id]: action.payload };
      }
      return { ...state, addedProducts: newCartItems }

    case productActionTypes.DEC_CART_ITEM_QTY: // DECREASE ITEM QUANTITY
      if (state.addedProducts[action.payload.id].quantity > 1) {
        increasedQuantity = state.addedProducts[action.payload.id].quantity - 1;
        newCartItems = { ...state.addedProducts, [action.payload.id]: { ...action.payload, quantity: increasedQuantity } }
      } else {
        let productId = action.payload.id
        newCartItems = { ...state.addedProducts };
        delete newCartItems[productId];
      }
      return { ...state, addedProducts: newCartItems };

    case productActionTypes.RESET_CART: // CLEAR CART
      action.payload.forEach((product: Product) => {
        newCartItems = { ...newCartItems, [product.id]: product }
      })
      return { ...state, addedProducts: newCartItems };

    default:
      return state;
  }
}