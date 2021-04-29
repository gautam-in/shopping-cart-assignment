import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "@globalStyles/normalize.global.scss";
import "@globalStyles/styles.global.scss";
import "@globalStyles/common.global.scss";
import { StoreProvider } from "./customHooks/useContext";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
