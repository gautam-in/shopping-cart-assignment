import React from 'react'
import './CartEmpty.css'

function CartEmpty({ onClose }) {
  return (
    <>
      <div className='cart-content-empty'>
        <div className='cart-content-empty-header'>No items in your cart </div>
        <div className='cart-content-empty-text'>Your favorite items are just a click away</div>
      </div>
      <div className='cart-footer-empty'>
        <div className='cart-footer-empty-button' onClick={() => onClose(false)}>
          Start Shopping
        </div>
      </div>
    </>
  )
}

export default CartEmpty