import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from 'react-redux';
import "./index.scss";
import "./reset.scss";

import { store } from './_helpers';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("root")
);
