import React from "react";
import { useDispatch } from "react-redux";
import { addCartSuccess } from "../../Store/Cart/cart.action";
import "./ProductItem.css";

export default function ProductItem(props) {
  const { id, name, imageURL, description, price } = props;
  const dispatch = useDispatch();
  return (
    <article className="product-item" key={id}>
      <div className="product-item-title">{name}</div>
      <div className="product-info">
        <div className="product-img">
          <img src={imageURL} alt="imagename" />
        </div>
        <div className="product-desc">{description}</div>
      </div>
      <div className="product-purchase">
        <div className="product-mrp">MRP Rs.{price}</div>
        <button
          className="product-btn-buynow"
          aria-label="Buy Now"
          onClick={() => dispatch(addCartSuccess(props))}
        >
          Buy Now
        </button>
        <button
          className="product-btn-small-screen"
          aria-label="Buy Now"
          onClick={() => dispatch(addCartSuccess(props))}
        >
          Buy Now @ Rs.{price}
        </button>
      </div>
    </article>
  );
}
