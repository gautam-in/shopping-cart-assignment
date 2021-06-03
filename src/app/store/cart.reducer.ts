import { ICartItem } from '../models/cart-item.model';
import { Action, createReducer, on } from '@ngrx/store';
import { addProduct, deleteProduct } from './cart.actions';

export const initialState: ICartItem[] = [];

const _cartReducer = createReducer(
  initialState,
  on(addProduct, (state, item) => {
    const productIndex = state.findIndex(
      (cartItem) => cartItem.product.id === item.product.id
    );
    if (productIndex > -1) {
      const product = state[productIndex];
      const quantity = state[productIndex].quantity + 1;
      const updateProduct = { ...product, quantity };
      const updateProducts = [...state];
      updateProducts[productIndex] = updateProduct;
      return updateProducts;
    } else {
      return [...state, item];
    }
  }),
  on(deleteProduct, (state, item) => {
    const productIndex = state.findIndex(
      (cartItem) => cartItem.product.id === item.id
    );
    if (productIndex > -1) {
      const product = state[productIndex];
      const quantity = state[productIndex].quantity - 1;
      const updateProduct = { ...product, quantity };
      const updateProducts = [...state];
      if (quantity > 0) {
        updateProducts[productIndex] = updateProduct;
      } else {
        updateProducts.splice(productIndex, 1);
      }
      return updateProducts;
    }
    return state;
  })
);

export function cartReducer(state = initialState, action: Action) {
  return _cartReducer(state, action);
}
