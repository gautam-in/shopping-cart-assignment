import {
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_OK,
  FETCH_PRODUCT_ERROR,
} from './constants';

const initialState = {
  loading: false,
  items: [],
}

const product = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_PRODUCT_OK:
      debugger
      let s =  {
         ...state,
         loading: false,
         items: action.payload.product,
      }
         return s
      case FETCH_PRODUCT_START:
      return {
         ...state,
         loading: true,
         items: [...state.items],
      }
      case FETCH_PRODUCT_ERROR:
      return {
         ...state,
         loading: false,
         items: [...state.items],
      }
      default:
      return {
         ...state,
         items: [...state.items],
      }
   }
}

export default product;