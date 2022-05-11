import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    
    return {
      ...state,
      products_loading: false,
      products: action.payload,
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
