import { combineReducers } from "redux";
import productReducer from "./products/ProductReducer";
import cartReducer from "./cart/CartReducer";
import categoryReducer from "./categories/CategoryReducer";
import bannerReducer from "./banners/BannerReducer";
import authReducer from "./Auth/AuthReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  banners: bannerReducer,
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
