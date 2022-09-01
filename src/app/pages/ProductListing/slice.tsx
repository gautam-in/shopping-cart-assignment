import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { myCartSaga } from 'app/components/MyCart/saga';
import { slice as myCartSlice } from 'app/components/MyCart/slice';
import { productListingSaga } from './saga';
import { ProductListingState } from './types';

export const initialState: ProductListingState = {
  loading: true,
  data: { categoriesRes: [], productsRes: [] },
  error: '',
};

const slice = createSlice({
  name: 'productListing',
  initialState,
  reducers: {
    getData(state) {
      state.loading = true;
      state.error = '';
    },
    getDataSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data.categoriesRes = action.payload.categoriesRes;
      state.data.productsRes = action.payload.productsRes;
    },
    getDataFail(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: productListingActions } = slice;

export const useProductListingSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: productListingSaga });

  useInjectReducer({ key: 'myCart', reducer: myCartSlice.reducer });
  useInjectSaga({ key: 'myCart', saga: myCartSaga });

  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useProductListingSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
