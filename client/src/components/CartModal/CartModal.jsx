import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import CartListItem from '../CartListItem';
import { CartModalContainer, CartModalWrapper, CartModalOverlay, CartModalHeader, CartModalCloseButton, CartModalHeading, CartModalBody, CartModalFooter, CheckoutButton, LowestPriceMessage, EmptyCartMessage } from './CartModal.styled';
import { useSelector } from 'react-redux';

const CartModal = ({ onClose }) => {
  const [totalCheckoutPrice, setCheckoutPrice] = useState(null)
  const cartList = useSelector(store => store.cart.cartList);

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "visible"
    };
  }, []);

  useEffect(() => {
    const sum = cartList.reduce((acc, obj) => acc + (obj.quantity * obj.price), 0);
    setCheckoutPrice(sum)
  }, [cartList]);

  const handleCheckout = () => {
    onClose()
  }

  const cartBody = cartList.length > 0
    ? cartList.map(item => <CartListItem key={item.id} id= {item.id} name= {item.name} imageURL= {item.imageURL} price= {item.price} quantity= {item.quantity}/>)
    : <EmptyCartMessage>
      <div className='empty-msg'><strong>No items in your cart</strong></div>
      <div>Your favourite items are just a click away</div>
    </EmptyCartMessage>

  return ReactDom.createPortal(
    <CartModalContainer>
      <CartModalOverlay onClick={onClose}></CartModalOverlay>
      <CartModalWrapper>
        <CartModalHeader>
          <CartModalHeading>
            <span><strong>My Cart</strong></span>
            <span className='cart-item-count'>(1 item)</span>
          </CartModalHeading>
          <CartModalCloseButton onClick={onClose}>X</CartModalCloseButton>
        </CartModalHeader>
        <CartModalBody>
          {
            cartBody
          }
          <LowestPriceMessage>
            <img src="static/images/lowest-price.png" alt="static/images/lowest-price.png" />
            <div>You won't find it cheaper anywhere</div>
          </LowestPriceMessage>
        </CartModalBody>
        <CartModalFooter>
          <div className='promo-message'>Promo code can be applied on payment page</div>
          <CheckoutButton onClick={handleCheckout} centerChild={cartList.length > 0 ? true : false}>
            <span>{cartList.length > 0 ? 'Proceed to Checkout' : 'Start Shopping'}</span>
            {cartList.length > 0 && <span className='total-amount'>
              Rs.{totalCheckoutPrice} {'>'}
            </span>}
          </CheckoutButton>
        </CartModalFooter>
      </CartModalWrapper>
    </CartModalContainer>,
    document.querySelector('.modal-container')
  )
}

export default CartModal