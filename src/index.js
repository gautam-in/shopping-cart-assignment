import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/store";

import { ViewportProvider } from "./hooks/useDevice";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ViewportProvider>
        <App />
      </ViewportProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

module.hot.accept();
