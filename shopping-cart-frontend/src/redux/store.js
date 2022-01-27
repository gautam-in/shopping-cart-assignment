import { createStore } from "redux";
import rootReducer from "./reducers/root.reducer";

let defaultStoreData = {
  cart: [],
};

const store = createStore(rootReducer, defaultStoreData);
export default store;
