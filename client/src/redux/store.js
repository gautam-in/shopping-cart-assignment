import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productCategoryReducer from './productCategorySlice'
import productCartsReducer from './productCartsSlice';

const rootReducer = combineReducers({
  productCategory:productCategoryReducer,
  productCarts:productCartsReducer
})

export const store = configureStore({
  reducer:rootReducer
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}