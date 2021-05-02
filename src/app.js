import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";

import Routes from "./routes";

const Header = lazy(() => import("./components/header"));
const Footer = lazy(() => import("./components/footer"));

import "./index.scss";

const Sppiner = () => {
  return <h1>Loading...</h1>;
};

const App = () => {
  return (
    <Suspense fallback={<Sppiner />}>
      <Header />
      <Switch>
        <Routes />
      </Switch>
      <Footer />
    </Suspense>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

module.hot.accept();
