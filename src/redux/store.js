import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducer from "./rootreducer";
export const store = createStore(
  rootreducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
