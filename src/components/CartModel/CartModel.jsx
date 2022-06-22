import React from "react";
import "../CartModel/CartModel.scss";
import Button from "../Button/Button";
import { MdNavigateNext } from "react-icons/md";

const CartModel = ({ handleCartOpen }) => {
  const product = {
    name: "Apple - Washington, Regular, 4 pcs",
    imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
    description:
      "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    price: 187,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-apple-4",
    id: "5b6c6aeb01a7c38429530884",
  };
  return (
    <div className="CartModel-container">
      <div className="cartModel">
        <header className="cartModel-header-container">
          <div className="cartModel-header-left">
            My Cart <span>(1 item)</span>
          </div>
          <div className="cartModel-header-right" onClick={handleCartOpen}>
            x
          </div>
        </header>
        <div className="cartModel-itmes-container">
          <img
            className="cartModel-itmes-image"
            src={product.imageURL}
            alt="product"
          />
          <div className="cartModel-name-price-container">
            <div className="cartModel-itmes-name">{product.name}</div>
            <div className="cartModel-itmes-price">
              <div className="cartModel-itmes-price-calculator">
                <button className="cartModel-price-button">-</button>1
                <button className="cartModel-price-button">+</button>
                <span>x</span>
                Rs{product.price}
              </div>
              <span>Rs{product.price}</span>
            </div>
          </div>
        </div>
        <div className="cartModel-priceBanner">
          <img src="/static/images/lowest-price.png" alt="lowest-price png" />
          <p>You won't find it cheaper anywhere</p>
        </div>
        <div className="cartModel-checkout-container">
          <span className="promo">
            Promo code can be applied on payment page.
          </span>
          <Button type="checkout">
            <span>Proceed to cart</span>
            <div className="cart-proceed">
              <span>Rs.{187}</span>
              <MdNavigateNext />
            </div>
          </Button>
          {/* <Button type="sign">Start Shopping</Button> */}
        </div>
      </div>
    </div>
  );
};

export default CartModel;
