import React from "react";

import "./ProductCardMobile.scss";
import { handleIncrement, addItemToCart } from "../../../store/action";
import { useSelector, useDispatch } from "react-redux";
import { LABEL } from "../../../constants/constant";

function ProductCardMobile(props) {
  const cart = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const { product } = props;

  const addCartItem = async (product) => {
    for (let item of cart) {
      if (item.id === product.id) return dispatch(handleIncrement(product.id));
    }
    return dispatch(addItemToCart(product));
  };
  return (
    <section className="mproductCard" data-test="component-product-card">
      <h3 className="mproductName">{product.name}</h3>
      <section style={{ display: "flex" }}>
        <figure style={{ width: "50%" }}>
          <img
            src={product.imageURL}
            alt={product.name}
            width="100%"
            data-test="product-image"
          />
        </figure>

        <section style={{ width: "50%" }}>
          <section className="mproductDescription">
            <p className="mdesc">{product.description}</p>
          </section>

          <section className="mproductPriceContainer">
            <button
              className="mproductPriceButton"
              onClick={() => addCartItem(product)}
              data-test="product-button"
            >
              <span className="mproductPrice">
                {LABEL.BUY_NOW} @ {LABEL.MRP}
                {product.price}{" "}
              </span>
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ProductCardMobile;
