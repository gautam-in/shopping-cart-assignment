import React from "react";
import "./CartItem.scss";
import { useSelector } from "react-redux";

const CartItem = ({ productId }) => {
  const product = useSelector(
    (state) =>
      state.products &&
      state.products.data &&
      state.products.data.find((_) => _.id === productId)
  );

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={product.imageURL} height={100} alt={product.name} />
      </div>
      <div className="item-name">{product.name}</div>
      <div className="item-price">Rs.{product.price}</div>
    </div>
  );
};

export default CartItem;
