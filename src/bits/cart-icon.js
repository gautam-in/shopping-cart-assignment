import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../redux/actions";
import { selectCartItemsCount } from "../redux/selectors/cart";
import { ReactComponent as ShoppingIcon } from "../assets/cart.svg";
import "./styles/cartIcon.css";

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <>
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" width="150px" />
      <span className="item-count" style={{ color: "black" }}>
        {itemsCount} items
      </span>
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
