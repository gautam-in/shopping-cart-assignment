import axios from "axios";
import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { addToCartAction, BASE_URL, fetchCartAction } from "../../Action";
import { store } from "../../store";
import { ButtonPink, ProductSection } from "./Product.style";
const cartStore = (state) => state.cartItems.cartItems;

function Product({ product }) {
  // useEffect(()=>{
  //   store.dispatch(fetchCartAction());
  // },[cartStore]);
  const dispatch = useDispatch();
  const cartSelect = useSelector(cartStore, shallowEqual);

  function addToCart() {
    // store.dispatch(fetchCartAction()); // To update quantity input in cartItem

    dispatch(addToCartAction(cartSelect, product));

    // store.dispatch()
    // store.dispatch(fetchCartAction());
  }

  return (
    <ProductSection className="product" key={product.id}>
      <h3>{product.name}</h3>
      <img src={product.imageURL} />
      <p className="description">{product.description}</p>
      <div className="d-flex justify-content-between price-action">
        <span>MRP Rs {product.price}</span>
        <ButtonPink className="buy-now" onClick={addToCart}>
          Buy Now
        </ButtonPink>
      </div>
    </ProductSection>
  );
}

export default Product;
