import { ProductItem, ProductsList } from "models/products";
import { CART, DECREMENT_PRODUCT, TOGGLE_MODAL } from "../actions/actionTypes";

export interface ICartLoading {
  postToCart: boolean;
}

export interface ICartError {
  postToCart: string;
}

export interface ICartState {
  cartItems: ProductsList;
  showCart: Boolean;
  error: ICartError;
  loading: ICartLoading;
}

export const cartInitialState: ICartState = {
  cartItems: {
    products: []
  },
  showCart: false,
  error: { postToCart: "" },
  loading: { postToCart: false }
};

const cartReducer = (state = cartInitialState, action: { payload: any; type: string }): ICartState => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, showCart: action.payload };

    case CART.POST.LOADING:
      return { ...state, loading: { ...state.loading, postToCart: true }, error: { ...state.error, postToCart: null } };
    case CART.POST.SUCCESS:
      return { ...state, loading: { ...state.loading, postToCart: false }, cartItems: { ...state.cartItems, products: totalProducts(state.cartItems, action.payload) } };
    case CART.POST.ERROR:
      return { ...state, loading: { ...state.loading, postToCart: false }, error: { ...state.error } };

    case DECREMENT_PRODUCT:
      return { ...state, loading: { ...state.loading, postToCart: false }, cartItems: { ...state.cartItems, products: removeProduct(state.cartItems, action.payload) } };

    // case CART.DELETE.SUCCESS:
    //   return { ...state, loading: { ...state.loading, postToCart: false }, cartItems: { ...state.cartItems, products: [] } };

    default:
      return state;
  }
};
export default cartReducer;

export const totalProducts = (cartItems: ProductsList, product: ProductItem) => {
  const existedProduct = cartItems.products.some((item) => item.id === product.id);
  if (existedProduct === false) {
    cartItems.products.push({ ...product, productCount: 1 });
  } else {
    const index = cartItems.products.findIndex((item) => item.id === product.id);
    cartItems.products[index].productCount = cartItems.products[index].productCount + 1;
  }
  return cartItems.products;
};

export const removeProduct = (cartItems: ProductsList, product: ProductItem) => {
  const { products } = cartItems;
  const index = cartItems.products.findIndex((item) => item.id === product.id);
  if (products[index].productCount > 1) {
    products[index].productCount = products[index].productCount - 1;
  } else {
    products.splice(index, 1);
  }

  return products;
};
