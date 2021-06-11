import { CartProductModel } from '../../models/cart-product.model';
import { CartState } from '../../models/cart-state.model';
import * as CartListActions from '../actions/cart-list.actions';

const initialState: CartState = {
  products: [],
};

const findInCart = (state: CartState) => (product: CartProductModel) =>
  state.products.findIndex((e) => e.sku === product.sku);

const computeTotalPrice = (state: CartState) =>
  state.products.reduce((p, c) => p + c.price * (c.count || 0), 0);
export function cartReducer(
  state: CartState = initialState,
  action: CartListActions.CartListActions | any
): CartState {
  let findProductInState = findInCart(state);

  switch (action.type) {
    case CartListActions.ADD_PRODUCT: {
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
    }
    case CartListActions.ADD_PRODUCTS: {
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
    }
    case CartListActions.ADD_PRODUCTS: {
      let indexes: number[] = action.payload.map(findProductInState);
      let newProducts = indexes.reduce((p: CartProductModel[], c, cInd) => {
        if (c === -1) {
          p.push(action.payload[cInd]);
        }
        return p;
      }, []);
      let productsIncart = indexes.filter((e) => e !== -1);
      let products = [...state.products, ...newProducts];
      productsIncart.forEach((prodInd) => products[prodInd].count++);
      return {
        ...state,
        products: products,
      };
    }
    case CartListActions.UPDATE_PRODUCT: {
      const product = state.products[action.payload.index];
      const updatedProduct = {
        ...product,
        ...action.payload.product,
      };
      const updatedProducts = [...state.products];
      updatedProducts[action.payload.index] = updatedProduct;
      return {
        ...state,
        products: updatedProducts,
      };
    }
    case CartListActions.DELETE_PRODUCT: {
      return {
        ...state,
        products: state.products.filter((ig, igIndex) => {
          return igIndex !== action.payload;
        }),
      };
    }

    case CartListActions.INCREASE_PRODUCT_QUANTITY: {
      const products = [...state.products];
      const prod = { ...products[action.payload] };
      prod.count += action.quantity;
      products[action.payload] = prod;
      return {
        ...state,
        products,
      };
    }

    case CartListActions.DECREASE_PRODUCT_QUANTITY: {
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
    }

    case CartListActions.COMPUTE_CART: {
      return {
        ...state,
        totalPrice: computeTotalPrice(state),
      };
    }

    case CartListActions.PLACE_ORDER_SUCCESS: {
      return {
        ...state,
        products: [],
        totalPrice: 0,
      };
    }
    default:
      return state;
  }
}
