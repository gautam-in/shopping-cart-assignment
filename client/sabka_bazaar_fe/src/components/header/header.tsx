import { ProductsList } from "models/products";
import Cart from "modules/cart/index";
import { CartActions } from "modules/cart/redux/actions/actions";
import { CartSelectors } from "modules/cart/redux/selectors/selectors";
import { LoginActions } from "modules/login/redux/actions/actions";
import { ProductsSelectors } from "modules/products/redux/selectors/selectors";
import { allRoutes } from "navigation/allRouteNames";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { LocalStorage } from "services/storage";
import { IState } from "store/interfaces";
import "./header.scss";

interface IProps {
  toggleCartModal: Function;
  clearStore: Function;
  productsList: ProductsList;
  cartItems: ProductsList;
}

const Header = (props: IProps): React.ReactElement => {
  const { toggleCartModal, cartItems, clearStore } = props;

  const handleLogout = () => {
    LocalStorage.clearStorage();
    clearStore();
  };

  useEffect(() => {
    LocalStorage.getStorage("status") !== "logged-in" && clearStore();
  });

  return (
    <header>
      <div className="left-nav">
        <div className="app-logo-div">
          <img src={"/static/images/logo.png"} alt="app logo" className="app-logo" />
        </div>
        <div className="main-nav">
          <ul>
            <li>
              <Link to={allRoutes.HOME} className="main-nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={allRoutes.PLP} className="main-nav-link">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="login-nav">
          {LocalStorage.getStorage("status") !== "logged-in" ? (
            <ul>
              <li>
                <Link to="/login" className="login-nav-link">
                  SignIn
                </Link>
              </li>
              <li>
                <Link to="/register" className="login-nav-link">
                  Register
                </Link>
              </li>
            </ul>
          ) : (
            <Link to="/" className="login-nav-link" onClick={() => handleLogout()}>
              Logout
            </Link>
          )}
        </div>
        <div className="cart-box" onClick={() => toggleCartModal(true)}>
          <img src={"/static/images/cart.svg"} alt="cart-icon" />
          <span>{`(${cartItems.products.length} items)`}</span>
        </div>
        <Cart />
      </div>
    </header>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    cartItems: CartSelectors.selectCartItems(state),
    productsList: ProductsSelectors.selectProducts(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleCartModal: (payload: boolean) => dispatch(CartActions.toggleModal(payload)),
    clearStore: () => dispatch(LoginActions.clearStore())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
