import React from "react";
import { Link } from "react-router-dom";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./header.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const Header = ({ itemCount, toggleCartHidden }) => {
  return (
    <div className="header">
      <div>
        <img
          className="img-container"
          src="static/images/logo.png"
          alt="Sabka Bazaar logo"
        />
      </div>

      <div className="header__links">
        <Link to="/">Home</Link>
        <Link to="/PLP">Products</Link>
      </div>
      <div className="header__cartIcon">
        <div className="header__options">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Register</Link>
        </div>
        <div className="cartIcon" onClick={toggleCartHidden}>
          <div className="cartDisplayContent">
            <img src="static/images/cart.svg" alt="cartSvg" />{" "}
            {itemCount ? (
              <span>{itemCount} item</span>
            ) : (
              <span>{itemCount} items</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
