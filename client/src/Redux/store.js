import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userCart } from "./cartReducer";
import { userData } from "./cred";
import { productList } from "./productListReducer";
import { categoriesList } from "./categoriesListReducer";
import { commonMethodsReducer } from "./commonReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  userCart: userCart,
  userData: userData,
  productList: productList,
  categoriesList: categoriesList,
  commonMethodsReducer: commonMethodsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userData", "productList", "categoriesList", "userCart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistedStore = persistStore(store);
