import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import {Modal,Button} from "react-bootstrap";
import "./CartItem.css"
import lowestPriceImg from "../images/lowest-price.png"

function CartItemList({ItemCount,show,handleClose}) {
  
  const [cartItemList, setcartItemList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let cartProducts = localStorage.getItem('cart');
    cartProducts = JSON.parse(cartProducts) || [];
    setcartItemList(cartProducts);
  }, [cartItemList]);
;
  const increment = (prod) => {
    let cartProducts = localStorage.getItem('cart');
    cartProducts = JSON.parse(cartProducts) || [];
    const selectedProdIndex = cartProducts.findIndex(item => item.id === prod.id);
    cartProducts[selectedProdIndex].qty = cartProducts[selectedProdIndex].qty + 1;
    localStorage.setItem('cart', JSON.stringify(cartProducts));
    setcartItemList(cartProducts);
  };

  const decrement = (prod) => {
    let cartProducts = localStorage.getItem('cart');
    cartProducts = JSON.parse(cartProducts) || [];
    const selectedProdIndex = cartProducts.findIndex(item => item.id === prod.id);
    if (cartProducts[selectedProdIndex].qty === 1) {
      cartProducts.splice(selectedProdIndex, 1);
    } else {
      cartProducts[selectedProdIndex].qty = cartProducts[selectedProdIndex].qty - 1;
    }
    localStorage.setItem('cart', JSON.stringify(cartProducts));
    setcartItemList(cartProducts);
  };
  const getTotal = () => {
    const total = cartItemList.reduce((prev, curr) => {
      return (curr.qty * curr.price) + prev;
    }, 0);
    return total;
  }
  if ( cartItemList.length===0 ) {
    return (
      <>
      <Modal show={show}>
        <Modal.Header >
          <Modal.Title>My Cart <span>({cartItemList.length} item{cartItemList.length > 1 ? 's' : ''})</span>
          <button type="button" onClick={handleClose} class="btn-close" aria-label="Close">
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='no-items-cart'>
        {cartItemList.length === 0 && (
        <>
            <section className='no-items-cart-content'>
              <h4 style={{ marginBottom: '10px'}}>No items in your cart</h4>
              <p style={{ marginBottom: '20px' }}>Your favorite items are just a click away</p>
            </section>
            
          </>
        )}
        </Modal.Body>
        <Modal.Footer>
        <button  onClick={() => navigate('/products')}>
          Start shopping
        </button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }

  return (
    <>
      <Modal show={show}>
        <Modal.Header >
          <Modal.Title>My Cart <span>({cartItemList.length} item{cartItemList.length > 1 ? 's' : ''})</span>
          <button type="button" onClick={handleClose} class="btn-close" aria-label="Close">
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItemList.map((element) => {
            return <CartItem product={element} key={element.id} increment={increment} decrement={decrement} />
          })}
          <div className='lowest-price-content mt-3'><img src={lowestPriceImg} alt="" /><span>You wont find it cheaper anywhere</span></div>
        </Modal.Body>
        <Modal.Footer>
          <p>Promo code can be applied on payment page</p>
        <button 
          onClick={() => navigate('/checkout')}
          >
          Proceed to Checkout Rs.{getTotal()} 
        </button>
        </Modal.Footer>
      </Modal>
    </>
  );

  

  
}

export default CartItemList;
