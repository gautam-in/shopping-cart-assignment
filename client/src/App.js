import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./Components/Footer/Footer";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import "./App.scss";
import Home from "./Components/Home/Home";
import { PrivateRoute } from "./Components/PrivateRoute";
import { connect } from "react-redux";
import { history } from "./_helpers";
import Products from "./Components/Products/Products";
import "./App.scss";
import { alertActions } from "./_actions";
import Cart from "./Components/Cart/Cart";

const App = ({
  loggedIn = false,
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
      <Router history={history}>
        <Header />
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        {
          showModal ? <Cart /> : ""
        }
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
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
          <Route exact path={routes.register} component={Register} />
          <Route exact path={routes.productById} component={Products} />
          <Route path={routes.products} component={Products} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { authentication, alert, cart } = state;
  const { loggedIn } = authentication;
  const { showModal } = cart;
  return { loggedIn, alert, showModal };
}

const mapDispatchToProps = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };








