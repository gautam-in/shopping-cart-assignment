import { CategoryState } from '../../models/category-state.model';
import { Category } from '../../models/category.model';
import { SET_CATEGORY } from '../actions/categories.actions';

const initialState: CategoryState = {
  categories: [],
  error: '',
  loading: false,
};

export function categoryReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        ...initialState,
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
      } as CategoryState;
    default:
      return state;
  }
}
