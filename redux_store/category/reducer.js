import {
   FETCH_CATEGORY_START,
   FETCH_CATEGORY_OK,
   FETCH_CATEGORY_ERROR,
} from './constants';

const initialState = {
   loading: false,
   items: [],
}

const category = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_CATEGORY_OK:
      debugger
      let s =  {
         ...state,
         loading: false,
         items: action.payload.category,
      }
      return s
      case FETCH_CATEGORY_START:
      return {
         ...state,
         loading: true,
         items: [...state.items],
      }
      case FETCH_CATEGORY_ERROR:
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

export default category;