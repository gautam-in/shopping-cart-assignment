import { createReducer, on } from '@ngrx/store';
import { ProductState } from '../../models/product-state.model';
import { Product } from '../../models/product.model';
import { ProductActions } from '../actions/product.action.types';

const initialState: ProductState = {
  allProducts: [],
  currentProducts: [],
  error: '',
  loading: false,
  categoryWiseProducts: {},
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.setProducts, (state, action) => {
    let categoryMap: { [key: string]: Product[] } = action.payload.reduce(
      (p, c: Product) => {
        if (p[c.category]) {
          p[c.category]?.push(c);
        } else {
          p[c.category] = [c];
        }
        return p;
      },
      {} as { [key: string]: Product[] }
    );

    return {
      ...state,
      ...initialState,
      currentProducts: action.payload.slice(),
      allProducts: action.payload.slice(),
      categoryWiseProducts: categoryMap,
    };
  }),
  on(ProductActions.filterBy, (state, action) => {
    let filteredProduct: Product[] = [];
    if (action.payload) {
      filteredProduct = [...(state.categoryWiseProducts[action.payload] || [])];
    } else {
      filteredProduct = [...state.allProducts];
    }

    return {
      ...state,
      loading: false,
      currentProducts: filteredProduct,
      filterBy: action.payload ? action.payload : null,
    };
  }),
  on(ProductActions.removeFilterBy, (state, action) => {
    let filteredProduct: Product[] = state.allProducts.slice();
    return {
      ...state,
      currentProducts: filteredProduct,
      loading: false,
      filterBy: null,
    };
  })
);
