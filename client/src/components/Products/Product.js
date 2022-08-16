import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { addToCartAction, BASE_URL, fetchCartAction } from "../../Action";
import { store } from "../../store";
import { ButtonPink, ProductSection } from "./Product.style";
const cartStore = (state) => state.cartItems.cartItems;

function Product({ product }) {
  // useEffect(()=>{
  //   store.dispatch(fetchCartAction());
  // },[cartStore]);
  const BASE_URL = "http://127.0.0.1:5500";
  // const BASE_URL = "http://localhost:3001"
  const dispatch = useDispatch();
  const cartSelect = useSelector(cartStore, shallowEqual);

  function addToCart() {
    // store.dispatch(fetchCartAction()); // To update quantity input in cartItem

    dispatch(addToCartAction(cartSelect, product));

    // store.dispatch()
    // store.dispatch(fetchCartAction());
  }
  function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  return (
    <ProductSection className="product" key={product.id}>
      <h3>{product.name}</h3>
      <div className="mob-prod-details">
        <img src={BASE_URL + product.imageURL} alt={product.name} />
        <div className="mob-prod-desc">
          <p className="description">{product.description}</p>
          <div className="d-flex justify-content-between price-action">
            {useWindowSize() > 576 ? <span>MRP Rs {product.price}</span> : null}
            <ButtonPink className="buy-now" onClick={addToCart}>
              Buy Now{" "}
              {useWindowSize() < 576 ? (
                <span>@ MRP Rs {product.price}</span>
              ) : null}
            </ButtonPink>
          </div>
        </div>
      </div>
    </ProductSection>
  );
}

export default Product;
