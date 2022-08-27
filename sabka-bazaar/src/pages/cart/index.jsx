import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../components/Modal/Modal";
import ReactPortal from "../../components/ReactPortal/ReactPortal";
import { selectCartItems } from "./store/selectors";
import "./cart.styles.scss";
import { FilledCart } from "../../components/Cart/FilledCart";
const EmptyCart = () => (
  <>
    <div>
      <p>No items in your cart</p>
    </div>
    <div>
      <p>Your favorite items are just a click away</p>
    </div>
  </>
);
const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const toogleCart = () => setIsOpen(!isOpen);
  return (
    <div className="cart-container">
      <div role="button" onClick={toogleCart} className="open-cart-btn">
        <img
          src="/static/images/cart.svg"
          width="30"
          height="30"
          alt="Go to cart"
        />
        <div className="cart-count-container">
          <p>{cartItems?.length} items</p>
        </div>
      </div>
      <ReactPortal wrapperId="react-portal-modal-container">
        <Modal handleClose={toogleCart} isOpen={isOpen}>
          {cartItems?.length === 0 ? (
            <EmptyCart />
          ) : (
            <FilledCart cartItems={cartItems} />
          )}
        </Modal>
      </ReactPortal>
    </div>
  );
};

export default Cart;
