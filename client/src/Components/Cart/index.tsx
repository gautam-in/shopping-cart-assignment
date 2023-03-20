import { useContext } from "react"
import { BsChevronRight } from "react-icons/bs"

import Modal from "../Common/Modal"

import { CartContext, CartItem } from "../../context"

import "./styles.scss"

export const Cart = ({
  setShowCart,
}: {
  setShowCart: (status: boolean) => void
}) => {
  const { state } = useContext(CartContext)

  const modalTitleText = (
    <div className="cart-title">
      My Cart <span>({state.items.length} items)</span>
    </div>
  )

  const checkoutButtonText = (
    <div className="cart-button-text">
      <span>Proceed to Checkout</span>
      <span>
        Rs. {state.total} <BsChevronRight />
      </span>
    </div>
  )

  return (
    <Modal
      title={modalTitleText}
      footerText="Promocode can be applied on payment page"
      actionText={checkoutButtonText}
      classes="cart-modal"
      onClose={() => setShowCart(false)}
    >
      <>
        {state.items.map((item: CartItem) => (
          <div className="cart-item" key={item.id}>
            <span>{item.name}</span>
          </div>
        ))}

        <div className="cart-banner">
          <img src="/static/images/lowest-price.png" alt="cheap price banner" />
          <span>You won't find it cheaper anywhere</span>
        </div>
      </>
    </Modal>
  )
}
