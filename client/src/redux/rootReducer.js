import { combineReducers } from "redux";
import productReducer from "./products/ProductReducer";
import cartReducer from "./cart/CartReducer";
import categoryReducer from "./categories/CategoryReducer";
import bannerReducer from "./banners/BannerReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  banners: bannerReducer,
  cart: cartReducer,
});

export default rootReducer;
