import {
  CartStyles,
  NoItem,
  CartHeader,
  CartContainer,
  LowerItemSection,
  CartFooter,
} from "../styles/CartStyle";
import CartItem from "../molecules/CartItem";
import CustomButton from "../atom/CustomButton";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  lowestImg,
  CheapText,
  Promo,
  Proceed,
  NoItemText,
  FavourItem,
  StartShoping,
  MyCart,
} from "../../constant";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { SET_CART_OPEN } from "../../context/actions/Constant";
export default function Cart() {
  const { cartItems, cartOpen, dispatch } = useContext(CartContext);
  const cart = cartItems?.cart;
  const totalPrice = cartItems?.totalPrice;

  const setCartState = (isOpen) => {
    dispatch({ type: SET_CART_OPEN, payload: isOpen });
  };
  return (
    <CartStyles open={cartOpen}>
      <CartHeader>
        <h1>
          {MyCart} {cart ? `(${cart.length} items)` : ""}{" "}
        </h1>
        <FontAwesomeIcon icon={faTimes} onClick={() => setCartState(false)} />
      </CartHeader>
      {cart?.length > 0 ? (
        <>
          <CartContainer className="scroller">
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} addedProduct={cartItem} />
            ))}
          </CartContainer>
          <LowerItemSection>
            <img src={lowestImg} alt="lowest price image" loading="lazy" />
            <p>{CheapText}</p>
          </LowerItemSection>
          <CartFooter>
            <p>{Promo}</p>
            <CustomButton classes="checkout-btn">
              {Proceed} <span> Rs. {totalPrice}</span>
            </CustomButton>
          </CartFooter>
        </>
      ) : (
        <>
          <NoItem>
            <h2>{NoItemText}</h2>
            <p>{FavourItem}</p>
          </NoItem>
          <CartFooter>
            <CustomButton classes="shopping-btn">{StartShoping}</CustomButton>
          </CartFooter>
        </>
      )}
    </CartStyles>
  );
}
