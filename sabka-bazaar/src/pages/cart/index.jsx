import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../components/Modal/Modal";
import ReactPortal from "../../components/ReactPortal/ReactPortal";
import { selectCartItemsCount } from "./store/selectors";
import "./cart.styles.scss";
import { FilledCart } from "../../components/Cart/FilledCart";
import { Button } from "../../components/Button/Button";
import PropTypes from "prop-types";
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
      <Button
        title="Start Shopping"
        type="startShopping"
        onClick={handleClose}
      />
    </div>
  </>
);
const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useSelector(selectCartItemsCount);

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
          <p>{cartCount} items</p>
        </div>
      </div>
      <ReactPortal wrapperId="react-portal-modal-container">
        <Modal handleClose={toogleCart} isOpen={isOpen} cartCount={cartCount}>
          {cartCount === 0 ? (
            <EmptyCart handleClose={toogleCart} />
          ) : (
            <FilledCart handleClose={toogleCart} />
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
