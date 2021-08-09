import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "./header.scss";
import Row from "components/row/row";
import Column from "components/column/column";
import MainNavigation from "components/mainNavigaton/mainNavigation";
import { CartActions } from "modules/cart/redux/actions/actions";
import Cart from "modules/cart/index";
import { IState } from "store/interfaces";
import { CartSelectors } from "modules/cart/redux/selectors/selectors";
import { ProductsList } from "models/products";
import { LocalStorage } from "services/storage";
import { LoginActions } from "modules/login/redux/actions/actions";
import { ProductsSelectors } from "modules/products/redux/selectors/selectors";

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
      <Row className="header-row">
        <Column lg={6} md={6} sm={6} xs={6} className="header-nav-column">
          <img src={"/static/images/logo.png"} alt="app logo" className="app-logo" />
          <MainNavigation />
        </Column>
        <Column lg={6} md={6} sm={6} xs={6} className="header-cart-column">
          {LocalStorage.getStorage("status") !== "logged-in" ? (
            <div className="login-nav">
              <Link to="/login" className="login-nav-link">
                SignIn
              </Link>
              <Link to="/register" className="login-nav-link">
                Register
              </Link>
            </div>
          ) : (
            <div className="login-nav">
              <Link to="/" className="login-nav-link" onClick={() => handleLogout()}>
                Logout
              </Link>
            </div>
          )}
          <div className="cart-box" onClick={() => toggleCartModal(true)}>
            <img src={"/static/images/cart.svg"} alt="cart-icon" />
            <span>{`(${cartItems.products.length} items)`}</span>
          </div>
          <Cart />
        </Column>
      </Row>
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
