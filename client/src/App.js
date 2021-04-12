import React, { Suspense, useEffect, lazy } from "react";
import Header from "./Components/Header/Header";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import { connect } from "react-redux";
import { history } from "./_helpers";
import "./App.scss";
import { alertActions } from "./_actions";
import Cart from "./Components/Cart/Cart";
import LoadingIndicator from "./Components/LoadingIndicator/LoadingIndicator";
const Home = lazy(() => import("./Components/Home/Home"));
const Products = lazy(() => import("./Components/Products/Products"));
const Register = lazy(() => import("./Components/Register/Register"));
const Login = lazy(() => import("./Components/Login/Login"));

const App = ({
  loggedIn = false,
  loggingIn,
  registering,
  alert = {},
  showModal,
  ...otherProps
}) => {
  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      otherProps.clearAlerts();
    });
  }, [history.location])
  return (
    <div className="App">
      {
        loggingIn || registering ? <LoadingIndicator />
          : ""
      }
      <Router history={history}>
        <Header />
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        {
          showModal ? <Cart /> : ""
        }
        <Suspense fallback={<LoadingIndicator />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={routes.signIn} render={() =>
              loggedIn ? (
                <Redirect
                  to={{
                    pathname: routes.home
                  }}
                />
              ) : (
                <Login />
              )
            } />
            <Route exact path={routes.productById} component={Products} />
            <Route path={routes.products} component={Products} />
            <Route exact path={routes.register} component={Register} />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { authentication, alert, cart, registration } = state;
  const { registering } = registration;
  const { loggedIn, loggingIn } = authentication;
  const { showModal } = cart;
  return { loggedIn, alert, showModal, loggingIn, registering };
}

const mapDispatchToProps = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };








