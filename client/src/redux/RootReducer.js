import { combineReducers } from "redux";
import BannerReducer from "../components/Banner/BannerReducer";
import ProductReducer from "../components/Products/ProductReducer";

const appReducer = combineReducers({
  product: ProductReducer,
  banner: BannerReducer,
});

export default appReducer;
