import React from "react";
import Button from "../Button";
import "./style.scss";

function CartItem(props) {
  const { product, onAdd, onRemove } = props;
  return (
    <li className="cartItem">
      <img src={product.imageURL} className="cartItem__img" />
      <div className="cartItem__content">
        <h5>{product.name}</h5>
        <div className="cartItem__details">
          <div>
            <Button onClick={() => onRemove(product)} className="cartItem__btn">
              -
            </Button>
            {product.amount}
            <Button onClick={() => onAdd(product)} className="cartItem__btn">
              +
            </Button>
            <span>
              <span className="cartItem__closeIcon"> &times;</span> Rs.
              {product.price}
            </span>
          </div>
          <div>Rs.{product.amount * product.price}</div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;

CartItem.defaultProps = {
  product: {
    name: "Apple - Washington, Regular, 4 pcs",
    imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
    description:
      "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    price: 187,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-apple-4",
    id: "5b6c6aeb01a7c38429530884",
    amount: 2,
  },
};
