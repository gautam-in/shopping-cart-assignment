import { ProductsList } from "models/products";
import { IFluxStandardAction } from "store/interfaces";
import { FILTEREDPRODUCTS, PRODUCTS } from "./actionTypes";

const getProducts = () => {
  return {
    type: PRODUCTS.GET.LOADING
  };
};

const getProductsSuccess = (payload: ProductsList): IFluxStandardAction<ProductsList> => {
  return {
    type: PRODUCTS.GET.SUCCESS,
    payload
  };
};

const getProductsError = (error: string): IFluxStandardAction<string> => {
  return {
    type: PRODUCTS.GET.ERROR,
    payload: error
  };
};

const getFilteredProducts = (payload: ProductsList["products"]): IFluxStandardAction<ProductsList["products"]> => {
  return {
    type: FILTEREDPRODUCTS,
    payload
  }
}

export const ProductsActions = { getProducts, getProductsSuccess, getProductsError, getFilteredProducts };
