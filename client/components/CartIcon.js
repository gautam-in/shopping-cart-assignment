import { CartIconStyle } from "../styles/HeaderStyle";
import { toggleCart } from "../Redux/actions/actions";

import { useDispatch, useSelector } from "react-redux";

export default function CartIcon() {
  const dispatch = useDispatch();
  return (
    <CartIconStyle aria-haspopup={true} onClick={() => dispatch(toggleCart())}>
      <img src="/static/images/cart.svg" alt="Cart" />
      <p>{`${useSelector((state) => state.cart.cartQuantity)} items`}</p>
    </CartIconStyle>
  );
}
