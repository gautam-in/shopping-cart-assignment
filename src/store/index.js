import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createLogger } from "redux-logger";

import homeReducer from "store/home/homeSlice";

const middleware = [
  /* YOUR CUSTOM MIDDLEWARES HERE */
  ...getDefaultMiddleware(),
];

const logger = createLogger({});
middleware.push(logger);

const combinedReducer = combineReducers({
  home: homeReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "reset-store") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
