import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cart';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(addToCart(product));
  }, [dispatch, product]);

  return (
    <li className="product-card" id={product.category}>
      <h2 className="product-name">{product.name}</h2>
      <img src={product.imageURL} alt={product.name} className="product-img" />
      <p className="product-desc">{product.description}</p>
      <button className="buy-button mobile" onClick={handleClick}>
        Buy Now @ Rs. {product.price}
      </button>
      <div className="product-cta-container">
        <span className="product-price">MRP Rs. {product.price}</span>
        <button onClick={handleClick} className="buy-button">
          Buy Now
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
