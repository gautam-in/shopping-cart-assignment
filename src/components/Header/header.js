import React from 'react';
import HomePage  from "../HomePage/homePage";
import Login from "../Login/login";
import ProductsListPage from "../ProductsListPage/productsListPage";
import logo from '../../images/logo_2x.png';
import {  Grid } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css';
import Register from '../Register/register';
import Cart from '../Cart/cart';


export default function Header(){

 
    return (
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <Grid item sm={2} md={2} lg={2} xs={8}>
      <img className="main-logo mb-3" src={logo} alt="main-logo" />
      </Grid>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
       <span className="navbar-toggler-icon"></span>
      </button>
      <Grid item  className="collapse navbar-collapse" id="collapsibleNavbar">
            <Grid item sm={1} md={1}  lg={1} xs={12}>
              <Link to="/" >Home</Link>
            </Grid>
            
            <Grid item  sm={1} md={1}  lg={1} xs={12} className="products-media-query">
              <Link to="/products">Products</Link>
            </Grid>

            <Grid item  sm={4} md={4} lg={4} xs={12}></Grid>
            <Grid item  sm={2} md={2}  lg={2} xs={12}>
             <Cart />
            </Grid>
           
            <Grid item  sm={1} md={1}  lg={1} xs={12} className="mb-4">
            <Link to="/login">Sign In</Link>
            </Grid>
            
            <Grid item  sm={1} md={1} lg={1} xs={12} className="mb-4">
            <Link to="/register">Register</Link></Grid>
            </Grid>
        </nav>  

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/products" component={ProductsListPage} />
          <Route path="/register" component={Register} />
        </Switch>
        </Router>
    )
}
