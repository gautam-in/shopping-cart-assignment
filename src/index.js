import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from 'react-redux'
import store from "./config/configStore"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);