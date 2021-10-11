/* eslint-disable react-hooks/exhaustive-deps */
import { allRoutes } from "navigation/allRouteNames";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../../atoms/image/image";
import { useSelector, useDispatch } from "react-redux";
import "./header.scss";
import { IState } from "store/interfaces";
import { LocalStorage } from "services/storage";
import { SignInActions } from "modules/signIn/redux/actions/actions";
import { useHistory } from "react-router";
import { CartActions } from "modules/cart/redux/actions/actions";
import Cart from "modules/cart/index";

const Header = (): React.ReactElement => {
  let history = useHistory();
  const dispatch = useDispatch();

  const cartItems = useSelector((state: IState) => state.cart.cartItems);
  let userStatus = useSelector((state: IState) => state.signIn.status);

  const handleLogout = () => {
    LocalStorage.clearStorage();
    dispatch(SignInActions.clearStore());
  };

  useEffect(() => {
    if (!userStatus) {
      dispatch(SignInActions.clearStore());
    }
  }, [userStatus]);

  const handleCartClick = () => {
    if (LocalStorage.getStorage("status")) {
      dispatch(CartActions.toggleModal(true));
    } else {
      history.push(allRoutes.LOGIN);
    }
  };

  return (
    <div className="main-header">
      <div className="left-nav-container">
        <Link to={allRoutes.HOME}>
          <Image src={"/static/images/logo.png"} alt="logo" customClass="logo" />
        </Link>
        <div className="main-navbar">
          <ul>
            <li>
              <Link to={allRoutes.HOME} className="main-navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={allRoutes.PRODUCTS} className="main-navbar-link">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="right-navbar">
        <div className="signin-navbar">
          {!userStatus || !LocalStorage.getStorage("status") ? (
            <ul>
              <li>
                <Link to={allRoutes.LOGIN} className="signin-navbar-link">
                  SignIn
                </Link>
              </li>
              <li>
                <Link to={allRoutes.REGISTER} className="signin-navbar-link">
                  Register
                </Link>
              </li>
            </ul>
          ) : (
            <Link to="/" className="signin-navbar-link" onClick={() => handleLogout()}>
              Logout
            </Link>
          )}
        </div>
        <div className="cart-box" onClick={() => handleCartClick()}>
          <Image src={"/static/images/cart.svg"} alt="cart-icon" />
          <span>{`${cartItems.products.length > 0 ? cartItems.products.length : 0} items`}</span>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Header;
