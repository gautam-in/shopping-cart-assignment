import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "store/product/productSlice";
import { Container } from "./Cart.styles";
import CartHeader from "./CartHeader";
import NoItem from "./NoItem";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";

const Cart = () => {
  const dispatch = useDispatch();
  const { totalProducts, totalPrice, cartItems } = useSelector(
    (state) => state.product
  );

  const closeCart = () => {
    dispatch(toggleCart(false));
  };
  return (
    <Container>
      <div className="wrapper">
        <CartHeader closeCart={closeCart} totalItems={totalProducts} />
        {totalProducts < 1 ? (
          <NoItem closeCart={closeCart} />
        ) : (
          <>
            <CartBody data={cartItems} />
            <CartFooter closeCart={closeCart} totalprice={totalPrice} />
          </>
        )}
      </div>
    </Container>
  );
};

export default Cart;
