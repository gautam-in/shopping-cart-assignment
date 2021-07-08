import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Navbar from "../Navbar/Navbar";
const Home = React.lazy(() => import("../Home"));
const Cart = React.lazy(() => import("../Cart/Cart"));
const Productlandingpage = React.lazy(() =>
  import("../Productlandingpage/Productlandingpage")
);
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Login = React.lazy(() => import("../Login/Login"));
const Register = React.lazy(() => import("../Register"));
import "./App.scss";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/Cart" component={Cart} />
              <Route path="/Product" component={Productlandingpage} />
            </Switch>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
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
