import { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/slices/cart/cart.selector";
import { ReactComponent as CartSVG } from "../Assets/svg/cart.svg";

import "../styles/cart-icon.scss";

const CartIcon = () => {
  const count = useSelector(selectCartCount);
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
    console.log(cartOpen);
  };

  return (
    <Fragment>
      <span onClick={handleCartClick} className="cart-icon-container">
        <CartSVG className="cart-icon" />
        {count} Items
      </span>
    </Fragment>
  );
};

export default CartIcon;
