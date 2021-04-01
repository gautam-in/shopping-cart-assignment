import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from 'react-redux';

import { store } from './_helpers';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

ReactDOM.render(
  // <Router history={history}>
  <Provider store={store}>
    <App />
  </Provider>
  // </Router>
  ,
  document.getElementById("root")
);
