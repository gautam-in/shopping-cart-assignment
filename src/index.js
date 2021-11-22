import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

import store from "./shared/store";
import "./index.css";
import App from "./App";

//use redux store on place of context API=
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
