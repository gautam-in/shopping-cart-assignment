import { combineReducers } from "redux";
import bannersreducer from "./Banners/bannersreducer";
import cartreducer from "./Cart/cartreducer";
import categoriesreducer from "./Categories/categoriesreducer";
import productsreducer from "./Products/productsreducer";
const rootReducer = combineReducers({
  banners: bannersreducer,
  categories: categoriesreducer,
  products: productsreducer,
  cartproducts: cartreducer
});

export default rootReducer;
