import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import ScrollToTop from "./hooks/scrollToTop";

const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "AppHomePageComponent" */ "./pages/HomePage")
);
const LoginPage = React.lazy(() =>
  import(/* webpackChunkName: "AppLoginPageComponent" */ "./pages/LoginPage")
);
const ProductsPage = React.lazy(() =>
  import(
    /* webpackChunkName: "AppProductsPageComponent" */ "./pages/ProductsPage"
  )
);
const RegisterPage = React.lazy(() =>
  import(
    /* webpackChunkName: "AppRegisterPageComponent" */ "./pages/RegisterPage"
  )
);

const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));

import { GlobalStyles } from "./globalStyles";

const App = () => {
  return (
    <>
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <GlobalStyles />
        <Header />
        <main>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/products/:id" component={ProductsPage} />
              <Route exact path="/products" component={ProductsPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Redirect to="/" />
            </Switch>
          </ScrollToTop>
        </main>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
