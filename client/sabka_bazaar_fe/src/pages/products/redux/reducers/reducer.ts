import { ProductsList } from "models/products";
import { FILTEREDPRODUCTS, PRODUCTS } from "../actions/actionTypes";

export interface IProductsLoading {
  getProducts: boolean;
  filteredProducts: boolean;
}

export interface IProductsError {
  getProducts: string;
}

export interface IProductsState {
  getProductsData: ProductsList;
  filteredProducts: ProductsList["products"];
  error: IProductsError;
  loading: IProductsLoading;
}

export const productsInitialState: IProductsState = {
  getProductsData: {
    products: []
  },
  filteredProducts: [],
  error: { getProducts: "" },
  loading: { getProducts: false, filteredProducts: false }
};

const productsReducer = (state = productsInitialState, action: { payload: any; type: string }): IProductsState => {
  switch (action.type) {
    case PRODUCTS.GET.LOADING:
      return { ...state, loading: { ...state.loading, getProducts: true }, error: { ...state.error, getProducts: null } };
    case PRODUCTS.GET.SUCCESS:
      return { ...state, loading: { ...state.loading, getProducts: false }, getProductsData: { ...state.getProductsData, products: action.payload } };
    case PRODUCTS.GET.ERROR:
      return { ...state, loading: { ...state.loading, getProducts: false }, error: { ...state.error } };
    case FILTEREDPRODUCTS:
      return { ...state, loading: { ...state.loading, filteredProducts: false }, filteredProducts: action.payload }
    default:
      return state;
  }
};

export default productsReducer;
