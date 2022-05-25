import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

function Cart({ onClose }) {
  return (
    <div className='cart'>
        <div className='cart-header'>
            <div className='cart-header-text'>
                My Cart <span className='item-count'>(1 item)</span>
            </div>
            <div className='cart-close' onClick={() => onClose(false)}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
        </div>
        <div className='cart-content'>
            <div className='cart-items'>
                <div className='cart-item'>
                    <div className='cart-item-image'>
                        <img src='/static/images/products/beverages/coke.jpg' alt="image"/>
                    </div>
                    <div className='cart-item-text'>
                        <div className='cart-item-name'>Apple - Washington, Regular, 4 pcs</div>
                        <div className='cart-item-price'>
                            <span className='circle-button'>
                                <FontAwesomeIcon icon={faMinus}/>
                            </span>
                            <span className='cart-item-count'>{1}</span>
                            <span className='circle-button'>
                                <FontAwesomeIcon icon={faPlus}/>
                            </span>
                            <span className='cart-item-cross'>
                                <FontAwesomeIcon icon={faXmark}/>
                            </span>
                            <span>Rs.{87}</span>
                        </div>
                    </div>
                    <div className='cart-item-rate'>
                        <div>Rs.{123}</div>
                    </div>
                </div>
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
        <div className='cart-content-empty none'>
            <div className='cart-content-empty-header'>No items in your cart </div>
            <div className='cart-content-empty-text'>Your favorite items are just a click away</div>
        </div>
        <div className='cart-footer'>
            <div className='cart-footer-text'>
                Promo code can be applied on payment page
            </div>
            <div className='cart-footer-button'>
                <div className='cart-footer-button-chekout'>Proceed to Checkout</div>
                <div className='cart-footer-button-amount'>
                    Rs.187
                    <span>&gt;</span>
                </div>
            </div>
        </div>
        <div className='cart-footer-empty none'>
            <div className='cart-footer-empty-button'>
                Start Shopping
            </div>
        </div>
    </div>
  )
}

export default Cart
