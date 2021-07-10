import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import bannerReducer from "./BannerReducer";
import categoryReducer from "./CategoryReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  banner: bannerReducer,
  category: categoryReducer,
});

export default rootReducer;
