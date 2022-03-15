import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/_base.scss";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalContextProvider from "./contexts/GlobalContext";

ReactDOM.render(
  <Router>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </Router>,
  document.getElementById("app")
);
