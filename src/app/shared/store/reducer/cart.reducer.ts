import { ICartItem } from 'src/app/shared/models/cart-item.model';
import { Action, createReducer, on } from '@ngrx/store';
import { addProduct, deleteProduct } from '../actions/cart.actions';

export interface State {
  cart: ICartItem[];
}

export const initialState: State = {
  cart: [],
};

const _cartReducer = createReducer(
  initialState,
  on(addProduct, (state, item) => {
    const productIndex = state.cart.findIndex(
      (cartItem) => cartItem.product.id === item.product.id
    );
    if (productIndex > -1) {
      const product = state.cart[productIndex];
      const quantity = state.cart[productIndex].quantity + 1;
      const updateProduct = { ...product, quantity };
      const cart = [...state.cart];
      cart[productIndex] = updateProduct;
      return { ...state, cart };
    } else {
      const cart = [...state.cart, item];
      return { ...state, cart };
    }
  }),
  on(deleteProduct, (state, item) => {
    const productIndex = state.cart.findIndex(
      (cartItem) => cartItem.product.id === item.id
    );
    if (productIndex > -1) {
      const product = state.cart[productIndex];
      const quantity = state.cart[productIndex].quantity - 1;
      const updateProduct = { ...product, quantity };
      const cart = [...state.cart];
      if (quantity > 0) {
        cart[productIndex] = updateProduct;
      } else {
        cart.splice(productIndex, 1);
      }
      return { ...state, cart: [...cart] };
    }
    return state;
  })
);

export function cartReducer(state = initialState, action: Action) {
  return _cartReducer(state, action);
}
