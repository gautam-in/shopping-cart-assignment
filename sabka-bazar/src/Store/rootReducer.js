import { combineReducers } from "redux";
import banners from "./Banner/banner.reducer";
import cart from "./Cart/cart.reducer";
import categories from "./Category/category.reducer";
import products from "./Products/products.reducer";

const rootReducer = combineReducers({
  banners,
  cart,
  categories,
  products,
});

export default rootReducer;
