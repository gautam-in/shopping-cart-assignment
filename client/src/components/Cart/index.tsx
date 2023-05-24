import { useContext } from "react";
import { MdChevronRight } from "react-icons/md";

import Button from "../Common/Button";
import Modal from "../Common/Modal";

import { CartContext } from "../../context/CartContext";

import { CartItemType, CartActionTypes } from "../../types";

import "./styles.scss";

export const EmptyCart = () => (
  <div className="empty-cart">
    <h4>No items in your cart</h4>
    <p>Your favourite items are just a click away</p>
  </div>
);

export const Cart = ({
  show,
  setShowCart,
}: {
  show: boolean;
  setShowCart: (status: boolean) => void;
}) => {
  const { state, dispatch } = useContext(CartContext);

  const { itemCount, total, items } = state;

  const modalTitleText = (
    <div className="cart__title">
      My Cart&nbsp;
      <span>
        ({itemCount === 1 ? ` ${itemCount} item ` : ` ${itemCount} items `})
      </span>
    </div>
  );

  const checkoutButtonText = () => (
    <div className="cart__button-text" aria-live="polite">
      {itemCount > 0 ? (
        <>
          <span className="cart__button-checkout">Proceed to Checkout </span>
          <span className="cart__button-total">
            Rs. {total}
            <MdChevronRight />
          </span>
        </>
      ) : (
        <span className="cart__button-shopping">Start Shopping</span>
      )}
    </div>
  );

  return (
    <Modal
      show={show}
      title={modalTitleText}
      footerCopy={`${
        items.length ? "Promocode can be applied on payment page" : ""
      }`}
      actionCopy={checkoutButtonText()}
      className="cart-modal"
      onClose={() => setShowCart(false)}
    >
      <>
        {items.length ? (
          <>
            <div className="cart-modal__item-list">
              {items.map((item: CartItemType) => (
                <div className="cart-modal__item" key={item.id}>
                  <picture>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="cart-modal__item-image"
                    />
                  </picture>

                  <div className="cart-modal__item-details">
                    <strong>{item.name}</strong>

                    <div className="cart-modal__item-actions">
                      <Button
                        type="button"
                        variant="primary"
                        classNames="cart-modal__item-actions__button"
                        onClick={() =>
                          dispatch({
                            type: CartActionTypes.UPDATE_QUANTITY,
                            payload: { product: item, delta: -1 },
                          })
                        }
                      >
                        -
                      </Button>
                      {item.quantity}
                      <Button
                        type="button"
                        variant="primary"
                        classNames="cart-modal__item-actions__button"
                        onClick={() =>
                          dispatch({
                            type: CartActionTypes.UPDATE_QUANTITY,
                            payload: { product: item, delta: 1 },
                          })
                        }
                      >
                        +
                      </Button>

                      <span>X</span>
                      <span>{item.price}</span>

                      <span className="cart-modal__item-actions__total">
                        Rs. {item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-modal__banner">
              <img
                src="/static/images/lowest-price.png"
                alt="cheap price banner"
              />
              <span>You won't find it cheaper anywhere</span>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </>
    </Modal>
  );
};
