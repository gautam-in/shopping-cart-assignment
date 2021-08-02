import React, { useEffect } from "react";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { HOME, PRODUCT_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../../routes/constants'
import { isEmpty } from 'lodash'
import { auth, db } from '../../config/firebase';
import { signOutUser } from '../../common/app.action';
import { resetCart } from '../Cart/Cart.action';
import { readCart } from '../Cart/Cart.action'
import { useDispatch } from "react-redux";
import { get } from 'lodash';
import { headerData } from "./Header.constants";
const Header = () => {
  const user = useSelector(
    (state) =>
      state.app &&
      state.app.userData
  );
const dispatch = useDispatch();
useEffect(() => {
  db?.collection('sabkabazaar')?.doc(user.email).get().then(snapshot => {
    dispatch(readCart(snapshot.data()))
  })
}, [user])  
const cartCount = useSelector((state) => state.cart && state.cart.cartItemCount)
const history = useHistory();

const { headerLabels, headerColor, cart } = headerData;

const logoutUser = () => {
    auth.signOut().then(() => {
      dispatch(signOutUser());
      dispatch(resetCart());
      history.push(LOGIN_ROUTE);
    }).catch((error) => {
      // An error happened.
    });
}
  
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand-name">
          <img
            className="brand-logo"
            src="../../../static/images/logo.png"
            alt="Sabka Bazaar Logo"
            height="60"
            width="100"
          />
        </div>
        <div className="left-nav">
          <ul className="tabs">
            <li>
              <Link to={HOME}>{get(headerLabels, 'nav.home')}</Link>
            </li>
            <li>
              <Link to={PRODUCT_ROUTE}>{get(headerLabels, 'nav.products')}</Link>
            </li>
          </ul>
        </div>
        { 
        <div className="right-nav">
          {user && !isEmpty(user) ? (
            <ul className="links">
              <li
                onClick={logoutUser}
              >
                <a href="#">{get(headerLabels, 'nav.logout')}</a>
              </li>
            </ul>
          )
          : (
           <ul className="links">
              <li>
                <Link to={LOGIN_ROUTE}>{get(headerLabels, 'nav.signin')}</Link>
              </li>
              <li>
                <Link to={REGISTER_ROUTE}>{get(headerLabels, 'nav.register')}</Link>
              </li>
            </ul>
          )}
          <div className="my-cart">
            <Link to="/cart">
              <img
                className="cart-icon"
                src="../static/images/cart.svg"
                alt="cart image"
                height="27"
                width="50"
              />
              {<span
                style= {
                  cartCount > 0 ? { color: get(headerColor, 'rose')} : { color: get(headerColor, 'grey') }
                }
              >
                {cartCount} {cartCount === 1 ? get(cart, 'item') : get(cart, 'items')}
              </span>}
            </Link>
          </div>
        </div> }
      </nav>
    </header>
  );
};

export default Header