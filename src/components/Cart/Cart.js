import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "store/product/productSlice";
import { Container } from "./Cart.styles";
import CartHeader from "./CartHeader";
import NoItem from "./NoItem";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";

const Cart = () => {
  const dispatch = useDispatch();
  const { isCartShow } = useSelector((state) => state.product);

  const closeCart = () => {
    dispatch(toggleCart(false));
  };
  console.log({ isCartShow });
  const a = 5;
  return (
    <Container>
      <div className="wrapper">
        <CartHeader closeCart={closeCart} totalItems={23} />
        {a > 5 ? (
          <NoItem closeCart={closeCart} />
        ) : (
          <>
            <CartBody />
            <CartFooter closeCart={closeCart} totalprice={187} />
          </>
        )}
      </div>
    </Container>
  );
};

export default Cart;
