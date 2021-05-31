import {
  APPLY_CATEGORY_FILTER,
  Product,
  REMOVE_CATEGORY_FILTER,
  SET_PRODUCTS,
} from './product.actions';

export interface State {
  currentProducts: Product[];
  error: string | null;
  loading: boolean;
  filter: Map<string, string[]>;
  categoryWiseProducts: Map<string, Product[]>;
}

const initialState: State = {
  currentProducts: [],
  error: null,
  loading: false,
  filter: new Map().set('category', []),
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
        loading: false,
        filter: new Map(),
        categoryWiseProducts: categoryMap,
      } as State;

    case APPLY_CATEGORY_FILTER: {
      let tobeAppliedFilter = new Set([
        ...(state.filter.get('category') || []),
        ...action.payload,
      ]);
      let resultProduct: Product[] = [];
      Array.from(tobeAppliedFilter.values())
        .filter((e) => !!state.categoryWiseProducts.get(e))
        .map((e) => state.categoryWiseProducts.get(e))
        .forEach((e) => {
          if (e instanceof Array) {
            resultProduct.push(...e);
          }
        });
      return {
        ...state,
        currentProducts: resultProduct,
        loading: false,
        authError: null,
        filter: state.filter.set(
          'category',
          Array.from(tobeAppliedFilter.values())
        ),
      } as State;
    }

    case REMOVE_CATEGORY_FILTER: {
      // a-b;
      let a = new Set(state.filter.get('category'));
      let b = new Set([...action.payload]);
      let tobeAppliedFilter = [...a].filter((x) => !b.has(x));
      let resultProduct: Product[] = [];
      Array.from(tobeAppliedFilter.values())
        .filter((e) => !!state.categoryWiseProducts.get(e))
        .map((e) => state.categoryWiseProducts.get(e))
        .forEach((e) => {
          if (e instanceof Array) {
            resultProduct.push(...e);
          }
        });
      return {
        ...state,
        currentProducts: resultProduct,
        loading: false,
        authError: null,
        filter: state.filter.set('categoty', tobeAppliedFilter),
      } as State;
    }

    default:
      return state;
  }
}
