import { combineReducers } from "redux";
import bannersReducer from "./banners.reducer";
// import authReducer from "./auth.reducers";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
// import userReducer from "./user.reducer";
// import pageReducer from "./page.reducers";

const rootReducer = combineReducers({
  category: categoryReducer,
  banner: bannersReducer,
  product: productReducer,
  // cart: cartReducer,

  //   auth: authReducer,
  //   user: userReducer,
  // order: orderReducer,
  //   page: pageReducer,
});

export default rootReducer;
