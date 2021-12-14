import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../reducer/cart/cart.actions";
import "./product-item.styles.css";

const ProductItem = ({ product }) => {
  const { name, imageURL, description, price } = product;
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addItem(product));
  };
  return (
    <div className='product-item'>
      <div className='prod-name'>{name}</div>
      <div className='img-desc-container'>
        <div className='prod-img'>
          <img src={imageURL} alt={name} />
        </div>
        <div className='prod-desc'>{description}</div>
      </div>
      <div className='price-container'>
        <div>MRP Rs.{price}</div>
        <button className='buy-button' onClick={handleAddCart}>
          Buy Now
        </button>
      </div>
      <button className='buy-button-mobile' onClick={handleAddCart}>
        Buy Now @ Rs.{price}
      </button>
    </div>
  );
};

export default ProductItem;
