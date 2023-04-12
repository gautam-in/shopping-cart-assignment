import { useContext } from "react"
import { BsChevronRight } from "react-icons/bs"

import { EmptyCart } from "./EmptyCart"
import { Button, Modal } from "../Common"
import { pluralize } from "../../utils"

import { CartContext, CartItem, CartActionTypes } from "../../context"

import "./styles.scss"

export const Cart = ({
  show,
  setShowCart,
}: {
  show: boolean
  setShowCart: (status: boolean) => void
}) => {
  const { state, dispatch } = useContext(CartContext)

  const { itemCount, total, items } = state

  const modalTitleText = (
    <div className="cart-title">
      My Cart&nbsp;
      <span>
        ({itemCount} {pluralize("item", "s", itemCount)})
      </span>
    </div>
  )

  const checkoutButtonText = () => (
    <div className="cart-button-text">
      {itemCount > 0 ? (
        <>
          <span>Proceed to Checkout</span>
          <span>
            Rs. {total} <BsChevronRight />
          </span>
        </>
      ) : (
        <span>Start Shopping</span>
      )}
    </div>
  )

  return (
    <Modal
      show={show}
      title={modalTitleText}
      footerText={`${
        items.length ? "Promocode can be applied on payment page" : ""
      }`}
      actionText={checkoutButtonText()}
      classes="cart-modal"
      onClose={() => setShowCart(false)}
    >
      <>
        {items.length ? (
          <>
            <div className="cart-item-list">
              {items.map((item: CartItem) => (
                <div className="cart-item grid" key={item.id}>
                  <img
                    src={item.imageURL}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-details">
                    <strong>{item.name}</strong>

                    <div className="cart-item-actions flex">
                      <Button
                        type="button"
                        variant="primary"
                        classes="cart-item-button"
                        handleClick={() =>
                          dispatch({
                            type: CartActionTypes.CHANGE_QUANTITY,
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
                        classes="cart-item-button"
                        handleClick={() =>
                          dispatch({
                            type: CartActionTypes.CHANGE_QUANTITY,
                            payload: { product: item, delta: 1 },
                          })
                        }
                      >
                        +
                      </Button>

                      <span>X</span>
                      <span>{item.price}</span>

                      <span className="cart-item-total text-center">
                        Rs. {item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-banner flex">
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
  )
}
