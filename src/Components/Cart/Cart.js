import React, { useState } from "react";
import Button from "../../Shared/Button";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../../Redux/Action";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems }) {
  // console.log(props.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div className="cart-Wrapper">
      {cartItems?.length >= 1 ? (
        <>
          <div className="cart-heading">
            <h1>
              My Cart <span>( {cartItems?.length || 0} items)</span>
            </h1>
          </div>
          <div className="cart-items">
            {cartItems.map((item) => {
              return (
                <div className="product-wrapper">
                  <div className="product-row">
                    <div>
                      <img src={item.imageURL} alt={item.name} height="100px" />
                    </div>
                    <div className="product-details">
                      <h4>{item.name}</h4>
                      <div className="product-quant">
                      <button
                          className="quantity-btn"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          -
                        </button>
                      
                      <span>{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                      X<h4>{item.price}</h4>
                      </div>
                       
                    </div>
                  </div>
                  <div className="product-total"> 
                    <h3>{item.quantity * item.price}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="checkout">
            <p className="checkout-heading" style={{ fontSize: "small" }}>
              Promo code can be applied on the checkout page.
            </p>
            <Button type="button" name="button">
              <span className="checkout-text">
                Proceed to checkout
                {cartItems.reduce((acc, curr) => {
                  return acc + curr.quantity * curr.price;
                }, 0)}
              </span>
            </Button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <header>
            <h1>My Cart</h1>
          </header>
          <div className="empty-cart-desc">
            <h2>No Items In Your Cart</h2>
            <p>Your Favourite Items are just a Click Away</p>
          </div>

          <Button onClick={() => navigate("/products")}>Start Shopping!</Button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state?.cart,
});

// const mapStateToProps=(state)=>({state})

// const mapDispatchToProps={
//   increaseProductQuantity:(id)=>(dispatch)=>dispatch(increaseQuantity(id))
// }

export default connect(mapStateToProps)(Cart);
