import { createStore, applyMiddleware } from "redux";
import cartReducer from "./cart/cart.reducer";
import logger from "redux-logger";

const middleware = [logger];

export const store = createStore(cartReducer, applyMiddleware(...middleware));
