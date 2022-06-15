import React from "react";
import ReactDOM from "react-dom/client";
import "./app/assets/css/styles.css";
import "./app/assets/css/common.css";
import reportWebVitals from "./reportWebVitals";
import RootRouter from "./app/router/router";
import Banner from "./component/banner/banner";
import { Provider } from "./store/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <RootRouter>
        <Banner />
      </RootRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
