import Button, { ButtonType } from "components/atoms/button/button";
import { ProductsList } from "models/products";
import { ReactElement } from "react";
import { Modal } from "react-bootstrap";
import "pages/cart/cart.scss";
import CartItem from "../../molecules/cart/cartItem";

interface IProps {
  cartItems: ProductsList;
  showCart: boolean;
  toggleModal: Function;
  addToCart: Function;
  decrementProduct: Function;
}

const CartModal = (props: IProps): ReactElement => {
  const { cartItems, showCart, toggleModal, addToCart, decrementProduct } = props;

  const handleClose = () => {
    toggleModal(false);
  };

  const totalPrice = () => {
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
        {/* <span>{`(${cartItems.products.length} items)`}</span> */}
        <span>{`(${cartItems ? cartItems.products.length : 0} items)`}</span>
      </Modal.Header>
      <Modal.Body className="cart-content">
        {cartItems && cartItems.products.length > 0 ? (
          <>
            <ul>
              {cartItems.products.map((product) => (
                <CartItem decrementProduct={decrementProduct} product={product} addToCart={addToCart} />
              ))}
            </ul>
            <div className="lowest-price">
              <img src={"/static/images/lowest-price.png"} alt={"lowest-price"} />
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
            <Button id="proceed-button" type={ButtonType.Secondary} customClass="proceed-button" onClick={() => toggleModal(false)}>
              <span>Proceed to Checkout</span>
              <span>{`Rs.${totalPrice()} >`}</span>
            </Button>
          </>
        ) : (
          <Button id="proceed-button" type={ButtonType.Secondary} customClass="empty-cart-button" onClick={() => toggleModal(false)}>
            <span>Start Shopping</span>
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
