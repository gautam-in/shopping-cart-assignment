import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../components/Modal/Modal";
import ReactPortal from "../../components/ReactPortal/ReactPortal";
import { selectIsAddToCartSuccess } from "./store/selectors";
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
  const isAddToCartSuccess = useSelector(selectIsAddToCartSuccess);
  console.log("isAdd to acrt succs", isAddToCartSuccess);
  const toogleCart = () => setIsOpen(!isOpen);
  return (
    <div className="cart-container">
      <div role="button" onClick={toogleCart}>
        <img
          src="/static/images/cart.svg"
          className="cart-img"
          alt="Go to cart"
        />
      </div>
      <ReactPortal wrapperId="react-portal-modal-container">
        <Modal handleClose={toogleCart} isOpen={isOpen}>
          <EmptyCart />
        </Modal>
      </ReactPortal>
    </div>
  );
};

export default Cart;
