import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

function CartList() {
  const [cartList, setCartList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let productsInCart = sessionStorage.getItem('cart');
    productsInCart = JSON.parse(productsInCart) || [];
    setCartList(productsInCart);
  }, []);

  const inc = (prod) => {
    let productsInCart = sessionStorage.getItem('cart');
    productsInCart = JSON.parse(productsInCart) || [];
    const selectedProdIndex = productsInCart.findIndex(item => item.id === prod.id);
    productsInCart[selectedProdIndex].qty = productsInCart[selectedProdIndex].qty + 1;
    sessionStorage.setItem('cart', JSON.stringify(productsInCart));
    setCartList(productsInCart);
  };

  const dec = (prod) => {
    let productsInCart = sessionStorage.getItem('cart');
    productsInCart = JSON.parse(productsInCart) || [];
    const selectedProdIndex = productsInCart.findIndex(item => item.id === prod.id);
    if (productsInCart[selectedProdIndex].qty === 1) {
      productsInCart.splice(selectedProdIndex, 1);
    } else {
      productsInCart[selectedProdIndex].qty = productsInCart[selectedProdIndex].qty - 1;
    }
    sessionStorage.setItem('cart', JSON.stringify(productsInCart));
    setCartList(productsInCart);
  };

  const getTotal = () => {
    const total = cartList.reduce((prev, curr) => {
      return (curr.qty * curr.price) + prev;
    }, 0);
    return total;
  }

  if (cartList.length === 0) {
    return (
      <section className='cart-container'>
        <section className='cart-heading'>
          <h2>My Cart</h2> &nbsp;
        </section>
        {cartList.length === 0 && (
          <div style={{ 
            "display": "flex", 
            "flexDirection": "column",
            "marginLeft": "10px",
            "marginRight": "10px",
            "justifyContent": "center",
            "alignItems": "center",
            "textAlign": "center"
            }}>
            <section>
              <h4 style={{ marginBottom: '10px' }}>No items in your cart</h4>
              <p style={{ marginBottom: '20px' }}>Your favorite items are just a click away</p>
            </section>
            <button style={{ background: "#a20c5a", color: "#fff", padding: "10px 15px", borderRadius: "4px", cursor: "pointer", outline: "none", "border": "none" }} onClick={() => navigate('/products')}>
              Start shopping
            </button>
          </div>
        )}
      </section>
    );
  }

  return (
    <>
      <section className='cart-container'>
        <section className='cart-heading'>
          <h2>My Cart</h2> &nbsp;
          <p>(<span>{cartList.length}</span> item{cartList.length > 1 ? 's' : ''})</p>
        </section>
        <section>
          {cartList.map((element) => {
            return <CartItem product={element} key={element.id} inc={inc} dec={dec} />
          })}
        </section>

        <button 
          onClick={() => navigate('/checkout')}
          style={{ marginTop: "20px", padding: "10px 15px", background: "#a20c5a", color: "#fff", border: "none", outline: "none", borderRadius: "3px", cursor: "pointer", width: "100%", marginLeft: "10px", marginRight: "10px" }}>
          Proceed to Checkout Rs.{getTotal()} 
        </button>
      </section>
    </>
  );
}

export default CartList;
