import { createReducer, on } from '@ngrx/store';
import { CategoryState } from '../../models/category-state.model';
import { Category } from '../../models/category.model';
import { CategoryActions } from '../actions/categories.action.types';

const initialState: CategoryState = {
  categories: [],
  error: '',
  loading: false,
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.setCategories, (state, action) => {
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
    };
  })
);
