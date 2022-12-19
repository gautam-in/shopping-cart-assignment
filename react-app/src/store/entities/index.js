import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./items";

export default combineReducers({
  items: homeReducer,
});
