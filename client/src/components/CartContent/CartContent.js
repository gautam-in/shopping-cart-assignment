import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import './CartContent.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectorCartProducts, selectorCartTotalAmount } from '../../features/cart/cartSlice'

function CartContent({ onClose }) {
  const totalAmount = useSelector(selectorCartTotalAmount)
  const cartProductsObject = useSelector(selectorCartProducts)
  const dispatch = useDispatch()
  const cartProducts = Object.values(cartProductsObject)

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
  }

  const buildCartItem = (item, index) => {
    return (
      <div className='cart-item' key={index}>
        <div className='cart-item-image'>
          <img src={item.imageURL} alt="image" />
        </div>
        <div className='cart-item-text'>
          <div className='cart-item-name'>{item.name}</div>
          <div className='cart-item-price'>
            <span className='circle-button' onClick={() => handleRemoveFromCart(item)}>
              <FontAwesomeIcon icon={faMinus} />
            </span>
            <span className='cart-item-count'>{item.count}</span>
            <span className='circle-button' onClick={() => handleAddToCart(item)}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className='cart-item-cross'>
              <FontAwesomeIcon icon={faXmark} />
            </span>
            <span>Rs.{item.price}</span>
          </div>
        </div>
        <div className='cart-item-rate'>
          <div>Rs.{item.subTotal}</div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='cart-content'>
        <div className='cart-items'>
          {cartProducts.map((product, index) => {
            return buildCartItem(product, index)
          })}
        </div>
        <div className='cart-lowest-price'>
          <div className='cart-lowest-price-image'>
            <img src="/static/images/lowest-price.png"></img>
          </div>
          <div className='cart-lowest-price-text'>
            You won't find it cheaper anywhere
          </div>
        </div>
      </div>
      <div className='cart-footer'>
        <div className='cart-footer-text'>
          Promo code can be applied on payment page
        </div>
        <div className='cart-footer-button' onClick={() => onClose(false)}>
          <div className='cart-footer-button-chekout'>Proceed to Checkout</div>
          <div className='cart-footer-button-amount'>
            Rs.{totalAmount}
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartContent
