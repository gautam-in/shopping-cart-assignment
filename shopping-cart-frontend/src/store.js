import { combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
import productsReducer from "./reducers/productsReducer";

const reducers = combineReducers({
  cartReducer,
  userReducer,
  productsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
