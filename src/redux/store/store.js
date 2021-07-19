import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [thunk, logger];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
// console.log(store.getState());
export default store;