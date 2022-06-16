import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { getProductData } from "./Redux/Reducers/productsSlice";
import { getCategoryData } from "./Redux/Reducers/categorySlice";
import { getCartData } from "./Redux/Reducers/cartSlice";

store.dispatch(getProductData());
store.dispatch(getCategoryData());
store.dispatch(getCartData());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
