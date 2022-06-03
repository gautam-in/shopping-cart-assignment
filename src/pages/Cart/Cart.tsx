import React, { useState, useEffect } from "react";
import type { CartProps, Product } from "../../types/customTypes";
import { CartItem } from "../../components/CartItem/CartItem";
import { GrFormNext } from "react-icons/gr";
import lowestPriceBanner from "../../../public/static/images/lowest-price.png";
import "./Cart.scss";

export const Cart = ({ cartState, cartDispatch }: CartProps) => {

  const [totalCartValue, setTotalCartValue] = useState(0);

  const getCartItem = (product: Product) => {
    return <CartItem key={product.id} product={product} cartDispatch={cartDispatch}/>
  }

  useEffect(() => {
    setTotalCartValue(cartState.reduce((accumulator, product) => product.qty ? accumulator + product.price * product.qty : accumulator + product.price, 0));
  }, [cartState])

  return (
    <div className="cart">
      <div>
      <header className="cart__header">{cartState.length > 0 ? `My Cart (${cartState.length} items)` : `My Cart`}</header>
      <div className="cart__details">
        {cartState.map((product) => {
          return getCartItem(product);
        })}

        {cartState.length > 0 ? 
          (
            <div className="cart__lowest-price-banner">
              <img src={lowestPriceBanner} alt="Lowest price guaranteed"/>
            </div>
          ) : null}
      </div>
      </div>

      {cartState.length > 0 ? (
        <div className="cart__checkout">
          <p>Promo code can be applied on payment page</p>
            <button>
            <span>Proceed to checkout</span>
            <span>Rs { totalCartValue }</span>
            <GrFormNext className="proceed-icon"/>
            </button>
        </div>
      ) : null}
    </div>
  )
}
