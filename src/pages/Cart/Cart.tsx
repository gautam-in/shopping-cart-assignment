import React from "react";
import type { CartProps, Product } from "../../types/customTypes";
import { CartItem } from "../../components/CartItem/CartItem";
import { GrFormNext } from "react-icons/gr";
import lowestPriceBanner from "../../../public/static/images/lowest-price.png";
import "./Cart.scss";

export const Cart = ({ cartState, cartDispatch }: CartProps) => {

  const getCartItem = (product: Product) => {
    return <CartItem key={product.id} product={product} cartDispatch={cartDispatch}/>
  }

  const getTotalCartValue = () => {
    return cartState.reduce((accumulator, product) => accumulator + product.price, 0);
  }

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
            <span>Rs { getTotalCartValue() }</span>
            <GrFormNext className="proceed-icon"/>
            </button>
        </div>
      ) : null}
    </div>
  )
}
