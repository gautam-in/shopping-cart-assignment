import { ProductItem } from "models/products";
import { IFluxStandardAction } from "store/interfaces";
import { CART, DECREMENT_PRODUCT, TOGGLE_MODAL } from "./actionTypes";

const toggleModal = (payload: boolean): IFluxStandardAction<boolean> => {
  return {
    type: TOGGLE_MODAL,
    payload
  };
};

const addToCart = (payload: ProductItem): IFluxStandardAction<ProductItem> => {
  return {
    type: CART.POST.LOADING,
    payload
  };
};

const addToCartSuccess = (payload: ProductItem): IFluxStandardAction<ProductItem> => {
  return {
    type: CART.POST.SUCCESS,
    payload
  };
};

const addToCartError = (error: string): IFluxStandardAction<string> => {
  return {
    type: CART.POST.ERROR,
    payload: error
  };
};

const decrementProduct = (payload: ProductItem): IFluxStandardAction<ProductItem> => {
  return {
    type: DECREMENT_PRODUCT,
    payload
  };
};

// const removeCartProducts = (): IFluxStandardAction=> {
//   return {
//     type: CART.DELETE.SUCCESS
//   }
// }
export const CartActions = { toggleModal, addToCart, addToCartSuccess, addToCartError, decrementProduct };
