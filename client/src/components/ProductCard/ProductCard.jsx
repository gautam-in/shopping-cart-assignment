import React from "react";

import "./ProductCard.scss";
import { handleIncrement, addItemToCart } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";
import { LABEL } from "../../constants/constant";

function ProductCard(props) {
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
    <section className="productCard" data-test="component-product-card">
      <h3 className="productName">{product.name}</h3>
      <figure>
        <img
          src={product.imageURL}
          alt={product.name}
          width="100%"
          data-test="product-image"
        />
      </figure>

      <section className="productDescription">
        <p className="desc">{product.description}</p>
      </section>

      <section className="productPriceContainer">
        <section className="productPrice">
          {" "}
          {LABEL.MRP}
          {product.price}{" "}
        </section>

        <button
          className="productPriceButton"
          onClick={() => addCartItem(product)}
          data-test="product-button"
        >
          {LABEL.BUY_NOW}
        </button>
      </section>
    </section>
  );
}

export default ProductCard;
