import { ProductState } from '../../models/product-state.model';
import { Product } from '../../models/product.model';
import {
  FILTER_BY,
  REMOVE_FILTER_BY,
  SET_PRODUCTS,
} from '../actions/product.actions';

const initialState: ProductState = {
  allProducts: [],
  currentProducts: [],
  error: '',
  loading: false,
  categoryWiseProducts: new Map(),
};

export function productReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_PRODUCTS:
      let categoryMap = action.payload.reduce(
        (p: Map<string, Product[]>, c: Product) => {
          if (p.has(c.category)) {
            p.get(c.category)?.push(c);
          } else {
            p.set(c.category, [c]);
          }
          return p;
        },
        new Map()
      );

      return {
        ...state,
        ...initialState,
        currentProducts: action.payload.slice(),
        allProducts: action.payload.slice(),
        categoryWiseProducts: categoryMap,
      } as ProductState;

    case FILTER_BY: {
      let filteredProduct: Product[] = [];
      if (action.payload) {
        filteredProduct = [
          ...(state.categoryWiseProducts.get(action.payload) || []),
        ];
      } else {
        filteredProduct = [...state.allProducts];
      }

      return {
        ...state,
        loading: false,
        currentProducts: filteredProduct,
        filterBy: action.payload ? action.payload : null,
      };
    }

    case REMOVE_FILTER_BY: {
      let filteredProduct: Product[] = state.allProducts.slice();
      return {
        ...state,
        currentProducts: filteredProduct,
        loading: false,
        filterBy: null,
      };
    }

    default:
      return state;
  }
}
