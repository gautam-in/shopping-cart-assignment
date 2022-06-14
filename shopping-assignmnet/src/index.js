import React from "react";
import ReactDOM from "react-dom/client";
import "./app/assets/css/styles.css";
import "./app/assets/css/common.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RootRouter from "./app/router/router";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootRouter>
      <App />
    </RootRouter>
  </React.StrictMode>
);

reportWebVitals();
