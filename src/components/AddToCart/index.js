import React, { useState } from 'react'
import { MediaURL } from '../../Utils/httpServices'

function AddToCart(props) {
  const { item, onClose } = props
  const [qty, setQty] = useState(1)

  return (
    <article className='addToCart-modal'>
      <section className='cart'>
        <div className='header'>
          <span className='heading'>MyCart
            <span className='displayApart'>
              <span className='itemCount'>({qty} item)</span>
              <i class="fa fa-times" aria-hidden="true" onClick={onClose}></i>
            </span>
          </span>
        </div>
        {
          qty ?
            <>
              <div className='body'>

                <>
                  <div className='itemlist'>

                    <div className='item-container'>
                      <img src={MediaURL + item.imageURL} alt={item.name} />
                      <div className='item-details'>
                        <p className='item-name'>{item.name}</p>
                        <div className='item-qty-container'>
                          <div>
                            <i class="fa fa-minus-circle primary-icon" aria-hidden="true" onClick={() => { setQty(qty => qty - 1) }}></i>
                            &ensp;
                            {qty}
                            &ensp;
                            <i class="fa fa-plus-circle primary-icon" aria-hidden="true" onClick={() => { setQty(qty => qty + 1) }}></i>
                            &emsp;
                            <i class="fa fa-times" aria-hidden="true" onClick={() => { setQty(0) }}></i>
                            &nbsp;
                            Rs {item.price}
                          </div>
                          <span>Rs {item.price * qty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='lowest-price-container'>
                    <img src="./static/images/lowest-price.png" alt="lowest-price" />
                    <span>You won't find it cheaper anywhere</span>
                  </div>
                </>

              </div>
              <div className='footer'>
                <p className='footer-message'>Promo code can be applied on payment page.</p>
                <button onClick={onClose}>Proceed to Checkout <span>Rs {item.price * qty} &nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></span></button>

              </div>
            </>
            :
            <>
              <div className='noCartContainer'>
                <p>No items in your cart</p>
                <span>Your favourite are just a click away</span>
              </div>
              <div className='footer' >
                <button onClick={onClose} style={{ justifyContent: "center" }}>Start Shopping</button>
              </div>
            </>
        }

      </section>
    </article>
  )
}

export default AddToCart