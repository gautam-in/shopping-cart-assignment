import Button, { ButtonType } from "components/atoms/button/button";
import { ReactElement } from "react";
import { Modal } from "react-bootstrap";
import CartItem from "components/molecules/cart/cartItem";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "store/interfaces";
import { CartActions } from "modules/cart/redux/actions/actions";
import "modules/cart/cart.scss";
import Image from "components/atoms/image/image";

const CartComponent = (): ReactElement => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: IState) => state.cart.cartItems);
  const showCart = useSelector((state: IState) => state.cart.showCart);

  const handleClose = () => {
    dispatch(CartActions.toggleModal(false));
  };

  const totalAmount = () => {
    const { products } = cartItems;
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total = total + products[i].price * products[i].productCount;
    }
    return total;
  };

  return (
    <Modal show={showCart} onHide={handleClose} dialogClassName="cart-modal" bsClass="my-modal">
      <Modal.Header className="cart-header" closeButton>
        <h2>My Cart</h2>
        <span>{`(${cartItems ? cartItems.products.length : 0} items)`}</span>
      </Modal.Header>
      <Modal.Body className="cart-content">
        {cartItems && cartItems.products.length > 0 ? (
          <>
            <ul>
              {cartItems.products.map((product) => (
                <CartItem product={product} />
              ))}
            </ul>
            <div className="lowest-price">
              <Image src={"/static/images/lowest-price.png"} alt={"lowest-price"} />
              <span>You won't find it cheaper anywhere</span>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <h2>No Items in your cart</h2>
            <p>Your favourite items are just a click away</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="cart-footer">
        {cartItems && cartItems.products.length > 0 ? (
          <>
            <p>Promo code can be applied on payment page</p>
            <Button id="proceed-button" type={ButtonType.Secondary} customClass="proceed-button" onClick={() => dispatch(CartActions.toggleModal(false))}>
              <span>Proceed to Checkout</span>
              <span>{`Rs.${totalAmount()}`}</span>&#62;
            </Button>
          </>
        ) : (
          <Button id="proceed-button" type={ButtonType.Secondary} customClass="empty-cart-button" onClick={() => dispatch(CartActions.toggleModal(false))}>
            <span>Start Shopping</span>
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CartComponent;
