import React, { useState, useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import CartListItem from '../CartListItem';
import { CartModalContainer, CartModalWrapper, CartModalOverlay, CartModalHeader, CartModalCloseButton, CartModalHeading, CartModalBody, CartModalFooter, CheckoutButton, LowestPriceMessage, EmptyCartMessage } from './CartModal.styled';
import { useSelector } from 'react-redux';

const CartModal = ({ onClose, showModal }) => {
  const [totalCheckoutPrice, setCheckoutPrice] = useState(null)
  const [cartQuantity, setCartQuantity] = useState(null)
  const modalRef = useRef(null);
  const checkoutButtonRef = useRef(null);


  const cartList = useSelector(store => store.cart.cartList);

  useEffect(() => {
    document.body.style.overflow = "hidden"
    modalRef.current.focus();
    return () => {
      document.body.style.overflow = "visible"
    };
  }, []);

  useEffect(() => {
    const totalCartQty = cartList.reduce((acc, obj) => acc + obj.quantity, 0);
    const sum = cartList.reduce((acc, obj) => acc + (obj.quantity * obj.price), 0);
    setCartQuantity(totalCartQty)
    setCheckoutPrice(sum)
  }, [cartList]);

  const handleTab = (event) => {
    if (event.key === 'Tab') {
      const elements = Array.from(modalRef.current.querySelectorAll('*'));
      const first = elements[0];
      if (event.shiftKey && (document.activeElement === first || document.activeElement.role==='dialog')) {
        checkoutButtonRef.current.focus();
        event.preventDefault();
      } else if (!event.shiftKey && document.activeElement === checkoutButtonRef.current) {
        first.focus();
        event.preventDefault();
      }
    }
  };

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
      <CartModalWrapper ref={modalRef} role='dialog' aria-modal={true} tabIndex={0} onKeyDown={handleTab}>
        <CartModalHeader tabIndex={0}>
          <CartModalHeading>
            <span><strong>My Cart</strong></span>
            <span className='cart-item-count'>({cartQuantity} item)</span>
          </CartModalHeading>
          <CartModalCloseButton aria-label={`Modal Close`} onClick={onClose}>X</CartModalCloseButton>
        </CartModalHeader>
        <CartModalBody>
          {
            cartBody
          }
          <LowestPriceMessage>
            <img src="static/images/lowest-price.png" alt="You won't find it cheaper anywhere" />
            <div>You won't find it cheaper anywhere</div>
          </LowestPriceMessage>
        </CartModalBody>
        <CartModalFooter>
          <div className='promo-message'>Promo code can be applied on payment page</div>
          <CheckoutButton ref={checkoutButtonRef} onClick={handleCheckout} centerChild={cartList.length > 0 ? true : false}>
            <span>{cartList.length > 0 ? 'Proceed to Checkout' : 'Start Shopping'}</span>
            {cartList.length > 0 && <span className='total-amount'>
              Rs.{totalCheckoutPrice} <span aria-hidden={true}>{'>'}</span>
            </span>}
          </CheckoutButton>
        </CartModalFooter >
      </CartModalWrapper>
    </CartModalContainer>,
    document.querySelector('.modal-container')
  )
}

export default CartModal