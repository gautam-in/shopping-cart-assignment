import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import api from "./middlewares/api";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api),
});
