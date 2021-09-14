import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { userCart } from "./cartReducer";
import { userData } from "./cred";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  userCart: userCart,
  userData: userData,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userData"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistedStore = persistStore(store);
