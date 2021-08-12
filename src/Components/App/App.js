import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Cart = React.lazy(() => import("../Cart/Cart"));
const Home = React.lazy(() => import("../Home"));
const Login = React.lazy(() => import("../Login/Login"));
const Productlandingpage = React.lazy(() => import("../Productlandingpage/Productlandingpage"));
const Register = React.lazy(() => import("../Register"));
import "./App.scss";
export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Product" component={Productlandingpage} />
            <Route path="/Register" component={Register} />
          </Switch>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Cart />
        </Suspense>
        <Footer/>
      </div>
    </Router>
  );
}
