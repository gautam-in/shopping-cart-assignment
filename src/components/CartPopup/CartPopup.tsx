import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import { useViewport } from "../../hooks/useViewport";
import { IoMdClose } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import type { CartPopupProps, Product } from "../../types/customTypes";
import lowestPriceBanner from "../../../public/static/images/lowest-price.png";
import "./CartPopup.scss";

export const CartPopup = ({ cartProps, popupProps }: CartPopupProps) => {

  const [totalCartValue, setTotalCartValue] = useState(0);
  const windowWidth = useViewport();
  
  // From Props
  const { cartState, cartDispatch } = cartProps;
  const { cartPopupToggle, setCartPopupToggle } = popupProps;

  const getCartItem = (product: Product) => {
    return <CartItem key={product.id} product={product} cartDispatch={cartDispatch}/>
  }

  const closeCartPopup = () => { setCartPopupToggle(false) }

  useEffect(() => {
    setTotalCartValue(cartState.reduce((accumulator, product) => product.qty ? accumulator + product.price * product.qty : accumulator + product.price, 0));
  }, [cartState])


  return (
    windowWidth < 768 ? null :
    <>
    {cartPopupToggle ? <div className="overlay" onClick={closeCartPopup}></div>: null}
    <div className={"cart-popup" + `${cartPopupToggle ? ' show-popup' : ' hide-popup'}`}>
    <header className="cart-popup__header">
      <h4>{cartState.length > 0 ? `My Cart (${cartState.length} items)` : `My Cart`}</h4>
      <button aria-label="popup-close"><IoMdClose className="close-popup-icon" onClick={closeCartPopup}/></button>
    </header>

        { cartState.length > 0 ? (
          <div className="cart-popup__body">
            <div className="cart-popup__details">
              {cartState.map((product) => {
                return getCartItem(product);
              })}
  
              <div className="cart-popup__lowest-price-banner">
                <img src={lowestPriceBanner} alt="Lowest price guaranteed"/>
              </div>
            </div>
      

            <div className="cart-popup__checkout">
              <p>Promo code can be applied on payment page</p>
              <button>
                <span>Proceed to checkout</span>
                <span>Rs { totalCartValue }</span>
                <GrFormNext className="proceed-icon"/>
                </button>
            </div>
            
          </div>
) : (<div className="cart-popup__body--empty">
        <h1>No items in your cart</h1>
        <p>Your favourite items are just a click away</p>
        <Link to="/products/all" onClick={closeCartPopup}>Start Shopping</Link>
    </div>)}
    </div>
    </>
  )
}

export default CartPopup;