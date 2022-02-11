import React from "react";
import './products-card.styles.scss';
import { useDispatch } from "react-redux";
import { updateCart } from "../../store/action/action";

function ProductCard(props) {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <li className="product-cards" role="listitem" id={product.category}>
      <h2 className="product-name truncate">{product.name}</h2>
      <img src={product.imageURL} alt={product.name} className="product-img" />
      <p className="product-desc">{product.description}</p>
      <button
        className="btn-cta mobile tablet"
        data-prod-id={product.id}
        data-prod-name={product.name}
        data-prod-price={product.price}
        data-prod-img={product.imageURL}
        onClick={() => {
          dispatch(updateCart(product));
        }}
      >
        Buy Now @ Rs. {product.price}
      </button>
      <div className="product-cta-container">
        <span className="product-price">MRP Rs. {product.price}</span>
        <button
          onClick={() => {
            dispatch(updateCart(product));
          }}
          className="btn-cta"
          data-prod-id={product.id}
          data-prod-name={product.name}
          data-prod-price={product.price}
          data-prod-img={product.imageURL}
        >
          Buy Now
        </button>
      </div>
    </li>
  );
}

export default ProductCard;