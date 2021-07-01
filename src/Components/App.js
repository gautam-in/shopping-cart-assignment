import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import Productlandingpage from "./Productlandingpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "./App.scss";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Product" component={Productlandingpage} />
          </Switch>
          <Cart />
          <footer className="copyright">
            <small>
              Copyright @ 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
            </small>
          </footer>
        </div>
      </Router>
    </Provider>
  );
}
