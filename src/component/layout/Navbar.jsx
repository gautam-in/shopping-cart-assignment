import React, { Suspense, useState, lazy } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./layout.scss";
const Cart = React.lazy(() => import("../common/Cart"));
const Home = lazy(() => import("../home/Home"));
const Product = lazy(() => import("../product/Product"));
const wildRoute = lazy(() => import("../common/wildRoute"));
const Login = lazy(() => import("../authentication/Login"));
const SignUp = lazy(() => import("../authentication/SignUp"));

function Navbar() {
  const [cartSatus, setcartSatus] = useState(false);
  const openCart = (status) => {
    status !== Boolean ? setcartSatus(status) : setcartSatus(true);
  };
  const itemCount = useSelector(
    (state) => state.getCartDetail.cartItems.length
  );
  return (
    <Router>
      <nav className="app-navbar">
        <div className="app-header">
          <div className="app-block left">
            <Link to="/" className="app-logo">
              <img
                src="/static/images/logo.webp"
                srcSet="/static/images/logo_2x.webp 1.5x, /static/images/logo_2x.webp 2x"
                alt="sabka-bazar-logo"
                loading="lazy"
                width="130"
                height="60"
              ></img>
            </Link>

            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
          </div>
          <div className="app-block right">
            <ul className="app-auth">
              <li>
                <Link to="/login">Sign In</Link>
              </li>
              <li>
                <Link to="/signUp">Register</Link>
              </li>
            </ul>
            <div className="app-cartBlock" onClick={openCart}>
              <img
                src="/static/images/cart.svg"
                alt="cart"
                width="30"
                height="30"
                loading="lazy"
              />
              <p>{itemCount} Items</p>
            </div>
          </div>
        </div>
      </nav>
      {cartSatus && (
        <Suspense
          fallback={
            <div className="loader-block">
              <div className="loader"></div>
            </div>
          }
        >
          <Cart status={openCart} />
        </Suspense>
      )}
      <Suspense
        fallback={
          <div className="loader-block">
            <div className="loader"></div>
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="*" exact={true} component={wildRoute} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Navbar;
