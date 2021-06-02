import {
  FILTER_BY,
  Product,
  REMOVE_FILTER_BY,
  SET_PRODUCTS,
} from './product.actions';

export interface State {
  allProducts: Product[];
  currentProducts: Product[];
  error: string | null;
  loading: boolean;
  categoryWiseProducts: Map<string, Product[]>;
  filterBy?: string | null;
}

const initialState: State = {
  allProducts: [],
  currentProducts: [],
  error: null,
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
        authError: null,
        currentProducts: action.payload.slice(),
        allProducts: action.payload.slice(),
        loading: false,
        filter: new Map(),
        categoryWiseProducts: categoryMap,
        filterBy: null,
      } as State;
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
        authError: null,
        currentProducts: filteredProduct,
        loading: false,
        filterBy: action.payload ? action.payload : null,
      };
    }

    case REMOVE_FILTER_BY: {
      let filteredProduct: Product[] = state.allProducts.slice();
      return {
        ...state,
        authError: null,
        currentProducts: filteredProduct,
        loading: false,
        filterBy: null,
      };
    }

    default:
      return state;
  }
}
