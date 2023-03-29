import { Modal } from "../Modal";
import CartBody from "./CartBody";

export const Cart = ({
  show,
  setShowCart,
}: {
  show: boolean;
  setShowCart: (status: boolean) => void;
}) => {
  const itemCount = 1;
  const total = 10;
  const items = [];
  const modalTitleText = (
    <div className="cart-title">
      My Cart&nbsp;
      <span>items</span>
    </div>
  );

  const checkoutButtonText = () => (
    <div className="cart-button-text">
      {itemCount > 0 ? (
        <>
          <span>Proceed to Checkout</span>
          <span>Rs. {total}</span>
        </>
      ) : (
        <span>Start Shopping</span>
      )}
    </div>
  );

  return (
    <Modal
      show={show}
      title={modalTitleText}
      onClose={() => setShowCart(false)}
    >
      <>
        <CartBody />
      </>
    </Modal>
  );
};
