import React from "react";
import "./ProductDetails.scss";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, increaseQuantity } from "../../redux/cart/cartActions";

const ProductDetails = ({ product }) => {
  const cartItems = useSelector((state) => state.cart.itemsAdded);
  const dispatch = useDispatch();

  const handleBuyNow = (prodId) => {
    if (cartItems.find((_) => _.id === prodId)) {
      dispatch(increaseQuantity(prodId));
    } else {
      dispatch(
        addItemToCart({
          id: prodId,
          quantity: 1,
          stock: product.stock,
          unitPrice: product.price,
          totalPrice: product.price,
        })
      );
    }
  };

  return (
    <div className="product-card">
      <div className="product-title">{product.name}</div>
      <div className="product-details">
        <img
          className="product-image"
          src={product.imageURL}
          alt={product.name}
          height="120"
          width="100"
        />
        <div className="product-description">
          {product.description}
          {/* <button className="buy-button">Buy Now @ Rs.{product.price}</button> */}
        </div>
      </div>
      <div className="price-details">
        <div className="mrp">MRP Rs {product.price}</div>
        <button
          type="button"
          className="buy-button"
          onClick={() => handleBuyNow(product.id)}
          tabIndex={0}
          onKeyPress={() => handleBuyNow(product.id)}
        >
          Buy Now <span className="buy-now-price"> @ Rs.{product.price}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
