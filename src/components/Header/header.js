import React from 'react';
import HomePage  from "../HomePage/homePage";
import Login from "../Login/login";
import MiniCart from "../MiniCart/miniCart";
import ProductsListPage from "../ProductListPage/productsListPage";
import logo from '../../static/images/logo_2x.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css';
import Register from '../Register/register';
import CartModel from '../MiniCart/cartModel';


export default function Header(){
    return (
      <Router>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <Grid item lg={1}  xs={1}></Grid>
            <Grid item lg={2} xs={2}>
              <img className="main-logo" src={logo} alt="main-logo" />
            </Grid>
            <Grid item lg={1} xs={1}>
              <Link to="/homePage">Home</Link>
            </Grid>
            
            <Grid item lg={2} xs={2}>
              <Link to="/productsList">Products</Link>
            </Grid>

            <Grid item lg={3} xs={3}></Grid>
            <Grid item lg={1} xs={1} className="cart-bg mt-4">
            0 items
            </Grid>
           
            <Grid item lg={1} xs={1} className="sign-in mb-4">
            <Link to="/login">Sign In</Link>
            </Grid>
            
            <Grid item lg={1} xs={1} className="ml-5 mb-4">
            <Link to="/register">Register</Link></Grid>
        </nav> */}

<nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
<img className="main-logo" src={logo} alt="main-logo" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/productsList">Products</Link>
      </li>
      <li className="nav-item topnav-right">
      <CartModel />
      </li>
      <li className="nav-item topnav-right">
      <Link to="/login">Sign In</Link>
      </li>
      <li className="nav-item topnav-right"> 
      <Link to="/register">Register</Link>
      </li>
    </ul>
  </div>
</nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          {/* <Route path="/model" component={CartModel} /> */}
          <Route path="/miniCart" component={MiniCart} />
          <Route path="/productsList" component={ProductsListPage} />
          <Route path="/register" component={Register} />
        </Switch>
        </Router>
    )
}
