import React, { useState, useEffect } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../images/cart.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ cartItems, toggleCartHidden }) => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    let count = cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    );
    setItemCount(count);
  }, [cartItems]);

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount} items</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
// export default CartIcon;
