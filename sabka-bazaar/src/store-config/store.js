import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homeReducer from "../pages/home/store/slice";
import rootSaga from "./rootSags";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
