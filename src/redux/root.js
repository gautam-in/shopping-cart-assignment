import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducers/user";
import cartReducer from "./reducers/cart";
import katsReducer from "./reducers/kats";
import avatarsReducer from "./reducers/avatars";

// the configuration for the local storage using redux-persiste is an obj that looks like this:
const persistConfig = {
  key: "ls-kittens-root",
  storage, // the type of storage that we would like to use, localStorage or sessionStorage
  whitelist: ["cart"] // this is an array of strings that will contains the keys of the reducer objs that we would like to persist
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  kats: katsReducer,
  avatars: avatarsReducer
});

export default persistReducer(persistConfig, rootReducer);
