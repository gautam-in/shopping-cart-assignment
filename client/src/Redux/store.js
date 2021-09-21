import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartList } from "./cartReducer";
import { userList } from "./cred";
import { productList } from "./productListReducer";
import { categoriesList } from "./categoriesListReducer";
import { commonMethodsReducer } from "./commonReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  cartList: cartList,
  userList: userList,
  productList: productList,
  categoriesList: categoriesList,
  commonMethodsReducer: commonMethodsReducer,
});

const persistConfig = {
  key: "sabkabazaar",
  storage,
  whitelist: ["userList", "productList", "categoriesList", "cartList"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistedStore = persistStore(store);
