import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homeReducer from "../pages/home/store/slice";
import productsReducer from "../pages/products/store/slice";
import cartReducer from "../pages/cart/store/slice";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    home: homeReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
