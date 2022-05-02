import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { decreaseProduct, increseProduct } from '../../redux/action';
import { totalProductPrice } from "../../redux/action-constants";
import { useNavigate } from "react-router-dom"
import "./cart.css"
const Cart = ({ handleModal }) => {
  const navigate = useNavigate()
  const cartData = useSelector(state => state.cartListData.cartList)
  const totalPrice = useSelector(state => state.cartListData.total)
  const count = useSelector(state => state.cartListData.count)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: totalProductPrice })
  }, [cartData])
  const handleClose = () => {
    handleModal()
  }
  const addProduct = (data) => {
    dispatch(increseProduct(data.id))
  }
  const removeProduct = (data) => {
    dispatch(decreaseProduct(data))
  }
  const handleShoping = () => {
    handleModal()
    navigate("/products")
  }
  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <div>My Cart {count ? <span>({count} item) </span> : ""}</div>
        <div>
          <p onClick={() => handleClose()}>X</p>
        </div>
      </div>
      <div className='cart-body'>
        {cartData.length > 0 ? cartData.map(e => {
          return (<div className='cart-content'>
            <div >
              <img src={e.imageURL} className='cart-image' />
            </div>
            <div className='cart-detail'>
              <div className='cart-item-name'>
                <h4>{e.name}</h4>
              </div>
              <div className='cart-item-detail'>
                <div className='cart-item-value'>
                  <div><i class="fa fa-minus-circle" onClick={() => removeProduct(e)}></i></div>
                  <div>{e.count}</div>
                  <div><i class="fa fa-plus-circle" onClick={() => addProduct(e)}></i></div>
                </div>
                <div className='cart-item-price'>
                  <h4>x Rs.{e.price}</h4>
                </div>
                <div className='cart-item-total'>
                  <h4>Rs.{e.count * e.price}</h4>
                </div>
              </div>
            </div>
          </div>
          )
        }) : ""
        }

        {count ? <div className='cart-info'>
          <img src={"/static/images/lowest-price.png"} className="image-resp" /><span> you won't find cheaper to anywhere</span>
        </div> : <div className='empty-cart'>
          <h2>No items in your cart</h2>
          <p>Your favourite items are just a click away</p>
        </div>}
      </div>
      {count ? <div className='cart-footer'>
        <div className='cart-footer-promo'>
          Promocode can be applied in payment page
        </div>
        <div className='cart-footer-value'>
          <button>
            <h4>Proced to checkout</h4> <h4>Rs.{totalPrice ? totalPrice : 0} <span> <i className="fa fa-angle-right icon" ></i></span> </h4>

          </button>
        </div>
      </div> : <div className='cart-footer-value2'>
        <button onClick={handleShoping}>
          <h4>Start Shopping</h4>
        </button>
      </div>}
    </div>
  );
};

export default Cart;