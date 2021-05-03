import {
   FETCH_BANNER_START,
   FETCH_BANNER_OK,
   FETCH_BANNER_ERROR,
} from './constants';

const initialState = {
   loading: false,
   items: [],
}

const banner = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_BANNER_OK:
      let s =  {
         ...state,
         loading: false,
         items: action.payload.banners,
      }
      return s
      case FETCH_BANNER_START:
      return {
         ...state,
         loading: true,
         items: [...state.items],
      }
      case FETCH_BANNER_ERROR:
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

export default banner;