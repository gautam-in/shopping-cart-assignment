import { Action } from '@ngrx/store';
import { Product } from 'src/app/modules/product/models/product.model';
import { CartProductModel } from '../../models/cart-product.model';
import { CartState } from '../../models/cart-state.model';
const comp = '[Cart]';
export const ADD_PRODUCT = `${comp} Add Product`;
export const ADD_PRODUCTS = `${comp} Add Products`;
export const UPDATE_PRODUCT = `${comp} Update Product`;
export const DELETE_PRODUCT = `${comp} Delete Product`;
export const ADD_CART_ERROR = `${comp} Add Cart Error`;
export const ADD_CART_SUCCESS = `${comp} Add Cart Error`;
export const FETCH_LOCAL_CART = `${comp} fetch Local Cart`;
export const COMPUTE_CART = `${comp} compute Cart`;
export const PLACE_ORDER = `${comp} place order`;
export const PLACE_ORDER_SUCCESS = `${comp} place order Success`;
export const PLACE_ORDER_FAIL = `${comp} place order Fail`;
export const INCREASE_PRODUCT_QUANTITY = `${comp} Increase Product quantity in Cart`;
export const DECREASE_PRODUCT_QUANTITY = `${comp} Decrease Product quantity in Cart`;
export const MAX_QUANTITY_ERROR = `${comp} max quantity reached error`;

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: CartProductModel, public quantity: number = 1) {}
}

export class IncreaseProductQuantity implements Action {
  readonly type = INCREASE_PRODUCT_QUANTITY;
  constructor(public payload: number, public quantity: number = 1) {}
}

export class DecreaseProductQuantity implements Action {
  readonly type = DECREASE_PRODUCT_QUANTITY;
  constructor(public payload: number, public quantity: number = 1) {}
}

export class ComputeCart implements Action {
  readonly type = COMPUTE_CART;
  constructor(public payload?: any) {}
}

export class PlaceOrder implements Action {
  readonly type = PLACE_ORDER;
  constructor(public payload?: any) {}
}

export class PlaceOrderSuccess implements Action {
  readonly type = PLACE_ORDER_SUCCESS;
  constructor(public payload?: any) {}
}

export class PlaceOrderFail implements Action {
  readonly type = PLACE_ORDER_FAIL;
  constructor(public payload?: any) {}
}
export class AddProducts implements Action {
  readonly type = ADD_PRODUCTS;
  constructor(public payload: CartProductModel[]) {}
}

export class UpdateProduct implements Action {
  readonly type = UPDATE_PRODUCT;

  constructor(
    public payload: {
      product: CartProductModel;
      index: number;
    }
  ) {}
}

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;
  constructor(public payload?: any) {}
}

export class AddCartError implements Action {
  readonly type = ADD_CART_ERROR;
  constructor(public payload: string) {}
}

export class AddCartSuccess implements Action {
  readonly type = ADD_CART_SUCCESS;
  constructor(public payload: string) {}
}

export class FetchLocalCart implements Action {
  readonly type = FETCH_LOCAL_CART;

  constructor(public payload?: CartState) {}
}

export class MaxQuantityError implements Action {
  readonly type = UPDATE_PRODUCT;

  constructor(
    public payload: {
      product: Product;
      otherInfo: any;
    }
  ) {}
}
export type CartListActions =
  | AddProduct
  | AddProducts
  | UpdateProduct
  | DeleteProduct
  | AddCartSuccess
  | MaxQuantityError
  | AddCartError;
