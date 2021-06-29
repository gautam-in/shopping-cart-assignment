import { createReducer, on } from '@ngrx/store';
import { CartProductModel } from '../../models/cart-product.model';
import { CartState } from '../../models/cart-state.model';
import { CartActions } from '../actions/cartlist.actions.types';

const initialState: CartState = {
  products: [],
};

const findInCart = (state: CartState) => (product: CartProductModel) =>
  state.products.findIndex((e) => e.sku === product.sku);

const computeTotalPrice = (state: CartState) =>
  state.products.reduce((p, c) => p + c.price * (c.count || 0), 0);

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addProduct, (state, action) => {
    let findProductInState = findInCart(state);
    const productInCartIndex = findProductInState(action.payload);
    if (productInCartIndex !== -1) {
      const products = [...state.products];
      let prod = { ...products[productInCartIndex] };
      if (!prod.count && action.quantity) {
        prod.count = 0;
      }
      prod.count += action.quantity;
      products[productInCartIndex] = prod;
      return {
        ...state,
        products,
      };
    } else {
      const product: CartProductModel = {
        ...action.payload,
        count: 1,
      };
      return {
        ...state,
        products: [...state.products, product],
      };
    }
  }),

  on(CartActions.addProducts, (state, action) => {
    let findProductInState = findInCart(state);
    let indexes: number[] = action.payload.map(findProductInState);
    let newProducts = indexes.reduce((p: CartProductModel[], c, cInd) => {
      if (c === -1) {
        p.push({ ...action.payload[cInd] });
      }
      return p;
    }, []);
    newProducts.forEach((prod) => {
      if (!prod.count) {
        prod.count = 1;
      }
    });

    // let productsIncart = indexes.filter((e) => e !== -1);
    let products = [...state.products, ...newProducts];
    // productsIncart.forEach((prodInd) => products[prodInd].count++);
    return {
      ...state,
      products: products,
    };
  }),
  on(CartActions.updateProduct, (state, action) => {
    const product = state.products[action.index];
    const updatedProduct = {
      ...product,
      ...action.product,
    };
    const updatedProducts = [...state.products];
    updatedProducts[action.index] = updatedProduct;
    return {
      ...state,
      products: updatedProducts,
    };
  }),
  on(CartActions.deleteProduct, (state, action) => {
    return {
      ...state,
      products: state.products.filter((ig, igIndex) => {
        return igIndex !== action.index;
      }),
    };
  }),
  on(CartActions.increaseProductQuantity, (state, action) => {
    const products = [...state.products];
    const prod = { ...products[action.payload] };
    prod.count += action.quantity;
    products[action.payload] = prod;
    return {
      ...state,
      products,
    };
  }),
  on(CartActions.decreaseProductQuantity, (state, action) => {
    const products = [...state.products];
    const prod = { ...products[action.payload] };
    prod.count -= action.quantity;
    products[action.payload] = prod;
    if (products[action.payload].count < 1) {
      products.splice(action.payload, 1);
    }
    return {
      ...state,
      products,
    };
  }),
  on(CartActions.computeCart, (state, action) => {
    return {
      ...state,
      totalPrice: computeTotalPrice(state),
    };
  }),
  on(CartActions.placeOrderSuccess, (state, action) => {
    return {
      ...state,
      products: [],
      totalPrice: 0,
    };
  })
);
