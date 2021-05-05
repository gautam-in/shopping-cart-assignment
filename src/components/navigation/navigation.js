import React from 'react'; 
import { Link } from 'react-router-dom';
import "./_navigation.scss"

const Navigation = (props) =>
{
  return (
        <>
                    <nav aria-label="Navigation" data-testid="navigation">
                        <div className="row">
                            <picture>
                            <source media={{minwidth:"465px"}} srcSet="static/images/logo.png" />
                            <img src="static/images/logo_2x.png" tabIndex="0" alt="sabka bazaar logo" className="logo" />
                            <img src="static/images/logo.png" tabIndex="0" alt="sabka bazaar logo" className="mobile-logo" />
                            </picture>
                            <ul className="main-nav nav1" role="navigation">
                                <li><Link to="/" aria-current="page">Home</Link></li>
                                <li><Link to="/products">Products</Link></li>
                            </ul>
                            <div className="header-right">
                            <ul className="main-nav nav2" role="navigation">
                                <li><Link to="/login">SignIn</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </ul>
                            <button className="cart-icon" data-toggle="modal" data-target="#myModal"><i className="fa fa-shopping-cart cart-fa" aria-hidden="true"></i><span id="cartcount">{props.cartCount}</span> Items</button>
                            </div>
                        </div>
                    </nav>
                    <div id="mySidenav" className="mobilenav">
                        <Link to="/" aria-current="page" id="home">Home</Link>
                        <Link to="/products" id="product">Products</Link>
                        <Link to="/login" id="signin">SignIn</Link>
                        <Link to="/register" id="register">Register</Link>
                    </div>
        </>
  );
}
  
export default Navigation;