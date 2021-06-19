import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";

import Store from "./store";
import Routes from "./routes";
import Loader from "./components/loader";

const Header = lazy(() => import("./components/header"));
const Footer = lazy(() => import("./components/footer"));

import "./index.scss";

const Spinner = () => {
  return (
    <div className="throbberOverlay">
      <Loader show={true} />
    </div>
  );
};

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
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
    <Store>
      <App />
    </Store>
  </BrowserRouter>,
  document.getElementById("root")
);

// module.hot.accept();
