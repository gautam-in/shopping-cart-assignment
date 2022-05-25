import { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../redux/features/appSlice";
import { ReactComponent as CartSVG } from "../Assets/svg/cart.svg";

import "../styles/cart-icon.scss";

const CartIcon = () => {
  const count = useSelector(selectCount);
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
