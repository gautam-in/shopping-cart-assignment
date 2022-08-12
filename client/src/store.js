import reducers from "./Reducers";
// import ReduxThunk from "redux-thunk";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from "@reduxjs/toolkit";
// export const middlewares = [ReduxThunk];
// const createStorewithMiddleWare = applyMiddleware(...middlewares)(createStore);
// export default createStorewithMiddleWare(reducers);
// export default createStore(reducers, composeWithDevTools(
//     applyMiddleware(...middlewares),
//     // other store enhancers if any
//   ));
  
export const store = configureStore({ reducer: reducers })