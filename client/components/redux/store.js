import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import addItemReducer from "./addItem/addItemReducer";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
/* const store = createStore(addItemReducer, composeWithDevTools()); */

export default store;
