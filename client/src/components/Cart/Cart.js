import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import CartEmpty from '../CartEmpty/CartEmpty'
import CartContent from '../CartContent/CartContent'
import { selectorCartProducts, selectorCartTotalCount } from '../../features/cart/cartSlice'
import './Cart.css'

function Cart({ onClose }) {
  const cartProductsObject = useSelector(selectorCartProducts)
  const cartTotalCount = useSelector(selectorCartTotalCount)
  const cartProducts = Object.values(cartProductsObject)
  const isCartEmpty = (cartProducts.length == 0)

  return (
    <div className='cart'>
      <div className='cart-header'>
        <div className='cart-header-text'>
          My Cart
          {
            (cartTotalCount > 0) &&
            <span className='item-count'>({cartTotalCount} item)</span>
          }
        </div>
        <div className='cart-close' onClick={() => onClose(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      {isCartEmpty && <CartEmpty />}
      {!isCartEmpty && <CartContent />}
    </div>
  )
}

export default Cart
