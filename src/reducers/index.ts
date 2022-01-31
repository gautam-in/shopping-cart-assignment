import { combineReducers } from "redux";
import catalogReducer from "./catalogReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
const createRootReducer = () =>
  combineReducers({
    catalog: catalogReducer,
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
  });

export default createRootReducer;
