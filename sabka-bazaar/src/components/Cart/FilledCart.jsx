import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItems } from "../../pages/cart/store/actions";
import {
  selectCartItems,
  selectCartTotal,
} from "../../pages/cart/store/selectors";
import { Button } from "../Button/Button";
import { CartItem } from "./CartItem";
import "./cart.styles.scss";

export const FilledCart = ({ handleClose }) => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();
  const incrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === productId
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
    dispatch(updateCartItems(updatedCartItems));
  };
  const decrementQuantity = (productId) => {
    const currentCartItem = cartItems.find(
      (cartItem) => cartItem.id === productId
    );
    let updatedCartItems = [];
    if (currentCartItem.quantity > 1) {
      updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === productId
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            }
          : cartItem
      );
    } else {
      updatedCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== productId
      );
    }
    dispatch(updateCartItems(updatedCartItems));
  };
  return (
    <>
      <div className="cart-items-list">
        {cartItems.map(({ name, id, imageURL, price, quantity }) => {
          return (
            <CartItem
              key={id}
              name={name}
              imageURL={imageURL}
              price={price}
              id={id}
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          );
        })}
      </div>
      <div className="price-tag-container">
        <div>
          <img
            src="/static/images/lowest-price.png"
            alt="lowest price guaranteed image"
            width="60"
            height="30"
            className="lowest-price-tag"
          />
        </div>
        <div>
          <p>You won&apos;t find it cheaper anywhere</p>
        </div>
      </div>
      <div className="checkout-section">
        <p>Promo code can be applied on payment page</p>
        <div className="checkout-btn-container">
          <Button
            title="Proceed to Checkout"
            type="checkoutBtn"
            price={cartTotal}
            onClick={handleClose}
          />
        </div>
      </div>
    </>
  );
};

FilledCart.propTypes = {
  cartItems: PropTypes.array,
  handleClose: PropTypes.func,
};
