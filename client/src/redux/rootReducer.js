import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import homeReducer from "./home/home.reducer";
import productsReducer from "./products/products.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth.reducer";
import loaderReducer from "./loader/loader.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  home: homeReducer,
  products: productsReducer,
  loader: loaderReducer,
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
