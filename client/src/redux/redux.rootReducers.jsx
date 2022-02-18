import { combineReducers } from "redux";

import productReducer from "../pages/product/reducer";

const rootReducers = combineReducers({
  product: productReducer,
});

export default rootReducers;
