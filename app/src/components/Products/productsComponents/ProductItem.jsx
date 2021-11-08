import React, { useContext } from "react";
import style from "./products.module.css";
import { CartContext } from "../../../contexts/Cart.context";

const ProductItem = (props) => {
  const { product } = props;
  const cart = useContext(CartContext);

  return (
    <div className={style.productItem}>
      <h5>
        <b>{product.name}</b>
      </h5>
      <div className={style.productImage}>
        <img src={product.imageURL} alt={product.name} />
      </div>
      <p className={style.productDescription}>{product.description}</p>

      <div className={style.priceDetailsBigScreen}>
        <span>MRP: Rs.{product.price}</span>
        <button onClick={() => cart.setCartItems(product)}>Buy Now</button>
      </div>

      {/* for small screen */}
      <div className={style.priceDetailsSmallScreen}>
        <p>{product.description}</p>
        <button
          onClick={() => cart.setCartItems(product)}
        >{`Buy Now @ MRP: Rs.${product.price}`}</button>
      </div>
    </div>
  );
};

export default ProductItem;
