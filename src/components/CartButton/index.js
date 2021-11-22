import { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { ReactComponent as CartIcon } from "./cart.svg";
import {handleCartAction} from "../../shared/cartAction/index.js" 

const CartButton = ({cartItems, handleCartAction}) => {
  const [openCart, setOpenCart] = useState(false);

  const handleAddItem = (data) => {
    handleCartAction([...cartItems.map(obj => {
      if(obj.id === data.id){
        return {...obj, quantity: obj.quantity + 1}
      } else { return obj}
    })])
  };

  const handleReduceItem = (data) => {
    handleCartAction([...cartItems.map(obj => {
        if(obj.id === data.id){
          return {...obj, quantity: obj.quantity - 1}
        } else { return obj}
      }).filter(obj => obj.quantity !== 0)
    ])
  };

  const calculatePrice = () => {
    const sum = cartItems.reduce(
      (prev, curr) => prev + parseInt(curr.price) * parseInt(curr.quantity),
      0
    );
    return sum;
  };
  
  const cartList =
    cartItems.length &&
    cartItems.map((item) => (
      <div className="cart-item" key={item.id}>
        <figure>
          <img src={item.imageURL} alt={item.name} />
        </figure>
        <div className="cart-item-data">
          <h3>{item.name}</h3>
          <div className="item-qty">
            <p>
              <span
                className="item-qty-minus"
                onClick={() => handleReduceItem(item)}
              >
                &#8722;
              </span>
              <span>{item.quantity}</span>
              <span
                className="item-qty-plus"
                onClick={() => handleAddItem(item)}
              >
                &#43;
              </span>
              <span>&#215;</span>
              <span>{`Rs.${item.price}`}</span>
            </p>
            <p>
              <span>{`Rs.${item.price * item.quantity}`}</span>
            </p>
          </div>
        </div>
      </div>
    ));

  let cartItemCount = 0;
  cartItems?.length && cartItems.length > 0 && cartItems.map(obj => {
    cartItemCount += obj.quantity
  });
    
  return (
    <main className="header-right">
      <section className={`header-login hide-mobile`}>
        <Link to="/login">SignIn</Link>
        <Link to="/register">Register</Link>
      </section>
      <section className="cart-container">
        <a
          // eslint-disable-next-line
          href="#"
          onClick={() => setOpenCart(!openCart)}
        >
          <CartIcon className="icon" />
          <span>{cartItemCount}</span>
          <span className="cart-text">items</span>
        </a>
      </section>
      <section className={`modal ${openCart ? "showmodal" : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>
              My Cart: Total Items <span>{cartItemCount}</span>
            </h3>
            <a
              // eslint-disable-next-line
              href="#"
              onClick={() => {
                setOpenCart(false);
              }}
            >
              &#10005;
            </a>
          </div>
          <div className="modal-data">
            {cartItems?.length ? (
              <>{cartList}</>
            ) : (
              <>
                <div className="cart-empty">
                  <h3>No items in your cart</h3>
                  <p>Your favourite items are just a click away</p>
                </div>
              </>
            )}

            {cartItems.length ? (
              <div className="cart-ads">
                <figure>
                  <img
                    src="https://w7.pngwing.com/pngs/945/814/png-transparent-low-price-text-sticker-sales-label-promotion-low-price-sticker-text-retail-logo.png"
                    alt="lowest price"
                  />
                </figure>
                <p>You won't find it cheaper anywhere</p>
              </div>
            ) : null}
          </div>
          <div className="modal-footer">
            {cartItems.length ? (
              <>
                <p>Promo code can be applied on payment page</p>
                <button style={{ cursor: "pointer" }}>
                  Proceed to Checkout
                  <span>
                    {`Rs. ${calculatePrice()}`}
                    &#10095;
                  </span>
                </button>
              </>
            ) : (
              <>
                <button
                  style={{ cursor: "pointer" }}
                  className="cart-empty-button"
                  onClick={() => setOpenCart(!openCart)}
                >
                  Start shopping
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

function mapStateToProps(state) {
  return {
    cartItems: state.CartReducer.itemList ? state.CartReducer.itemList : [],
    loading: state.CartReducer.loading
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleCartAction
}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
