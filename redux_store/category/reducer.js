import {
   FETCH_CATEGORY_START,
   FETCH_CATEGORY_OK,
   FETCH_CATEGORY_ERROR,
   SELECT_PRODUCT_CATEGORY,
} from './constants';

const initialState = {
   loading: false,
   items: [],
   selectedId : null
}

const category = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_CATEGORY_OK:
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
      case SELECT_PRODUCT_CATEGORY:
      const currentId = action.payload.id
      return {
         ...state,
         selectedId: state.selectedId != currentId?currentId:null,
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