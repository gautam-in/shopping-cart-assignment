import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/modules/product/models/product.model';
import { CartProductModel } from '../../models/cart-product.model';
const comp = '[Cart]';
const ADD_PRODUCT = `${comp} Add Product`;
const ADD_PRODUCTS = `${comp} Add Products`;
const UPDATE_PRODUCT = `${comp} Update Product`;
const DELETE_PRODUCT = `${comp} Delete Product`;
const ADD_CART_ERROR = `${comp} Add Cart Error`;
const ADD_CART_SUCCESS = `${comp} Add Cart Error`;
const FETCH_LOCAL_CART = `${comp} fetch Local Cart`;
const COMPUTE_CART = `${comp} compute Cart`;
const PLACE_ORDER = `${comp} place order`;
const PLACE_ORDER_SUCCESS = `${comp} place order Success`;
const PLACE_ORDER_FAIL = `${comp} place order Fail`;
const INCREASE_PRODUCT_QUANTITY = `${comp} Increase Product quantity in Cart`;
const DECREASE_PRODUCT_QUANTITY = `${comp} Decrease Product quantity in Cart`;
const MAX_QUANTITY_ERROR = `${comp} max quantity reached error`;

export const addProduct = createAction(
  ADD_PRODUCT,
  props<{ payload: CartProductModel; quantity: number }>()
);

export const increaseProductQuantity = createAction(
  INCREASE_PRODUCT_QUANTITY,
  props<{ payload: number; quantity: number }>()
);

export const decreaseProductQuantity = createAction(
  DECREASE_PRODUCT_QUANTITY,
  props<{ payload: number; quantity: number }>()
);

export const computeCart = createAction(
  COMPUTE_CART,
  props<{ payload?: any }>()
);

export const placeOrder = createAction(PLACE_ORDER, props<{ payload?: any }>());

export const placeOrderSuccess = createAction(
  PLACE_ORDER_SUCCESS,
  props<{ payload?: any }>()
);

export const placeOrderFail = createAction(
  PLACE_ORDER_FAIL,
  props<{ payload?: any }>()
);
export const addProducts = createAction(
  ADD_PRODUCTS,
  props<{ payload: CartProductModel[] }>()
);

export const updateProduct = createAction(
  UPDATE_PRODUCT,

  props<{
    product: CartProductModel;
    index: number;
  }>()
);

export const deleteProduct = createAction(
  DELETE_PRODUCT,
  props<{ index: number }>()
);

export const addCartError = createAction(
  ADD_CART_ERROR,
  props<{ payload: string }>()
);

export const addCartSuccess = createAction(
  ADD_CART_SUCCESS,
  props<{ payload: string }>()
);

export const fetchLocalCart = createAction(FETCH_LOCAL_CART);

export const maxQuantityError = createAction(
  UPDATE_PRODUCT,
  props<{
    payload: {
      product: Product;
      otherInfo: any;
    };
  }>()
);
