import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../components/Modal/Modal";
import ReactPortal from "../../components/ReactPortal/ReactPortal";
import { selectCartItemsCount } from "./store/selectors";
import "./cart.styles.scss";
import { FilledCart } from "../../components/Cart/FilledCart";
import { Button } from "../../components/Button/Button";
import PropTypes from "prop-types";
import OpenCartBtn from "../../components/Cart/OpenCartBtn";
const EmptyCart = ({ handleClose }) => (
  <>
    <div className="empty-cart">
      <div className="empty-cart-header">
        <p>No items in your cart</p>
      </div>
      <div className="empty-cart-body">
        <p>Your favorite items are just a click away</p>
      </div>
    </div>
    <div className="start-shopping-btn-container">
      <Button title="Start Shopping" type="primaryBtn" onClick={handleClose} />
    </div>
  </>
);
const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemsCount = useSelector(selectCartItemsCount);
  useLayoutEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);
  const toggleCart = () => setIsOpen(!isOpen);
  return (
    <div className="cart-container">
      <OpenCartBtn toggleCart={toggleCart} cartItemsCount={cartItemsCount} />
      <ReactPortal wrapperId="react-portal-modal-container">
        <Modal
          handleClose={toggleCart}
          isOpen={isOpen}
          cartItemsCount={cartItemsCount}
        >
          {cartItemsCount === 0 ? (
            <EmptyCart handleClose={toggleCart} />
          ) : (
            <FilledCart handleClose={toggleCart} />
          )}
        </Modal>
      </ReactPortal>
    </div>
  );
};

EmptyCart.propTypes = {
  handleClose: PropTypes.func,
};

export default Cart;
