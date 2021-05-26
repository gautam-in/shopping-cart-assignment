import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "store/product/productSlice";
import { Container } from "./Cart.styles";
import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";

const Cart = () => {
  const dispatch = useDispatch();
  const { isCartShow } = useSelector((state) => state.product);

  const closeCart = () => {
    dispatch(toggleCart(false));
  };
  console.log({ isCartShow });
  return (
    <Container>
      <div className="wrapper">
        <CartHeader closeCart={closeCart} totalItems={23} />
        <CartBody />
        <CartFooter closeCart={closeCart} totalprice={187} />
      </div>
    </Container>
  );
};

export default Cart;
