import { Category, SET_CATEGORY } from './categories.actions';

export interface State {
  categories: Category[];
  error: string | null;
  loading: boolean;
}

const initialState: State = {
  categories: [],
  error: null,
  loading: false,
};

export function categoryReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        authError: null,
        categories: (action.payload.slice() as Category[])
          .sort((a, b) => a.order - b.order)
          .filter((e) => e.enabled)
          .map((el) => {
            let e = { ...el };
            if (el.imageUrl.startsWith('/')) {
              e.imageUrl = e.imageUrl.slice(1);
            }
            return e;
          }),
        loading: false,
      } as State;
    default:
      return state;
  }
}
