import React from "react";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../reducers/cartReducer";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="productsContainer">
      {products.map((product, index) => (
        <div key={index.toString()} className="productContainer">
          <div className="productTitle">{product?.name}</div>
          <div className="productDetails">
            <img
              src={product?.imageURL}
              alt={product?.name}
              className="productImage"
            />
            <div>
              <div className="productDescription">{product?.description}</div>
              <div className="priceBlock">
                MRP Rs.{product.price}
                <button
                  className="link-button"
                  onClick={() => dispatch(addItemToCart(product))}
                >
                  Buy Now
                </button>
              </div>
              <button
                className="link-button buyNowBlock"
                onClick={() => dispatch(addItemToCart(product))}
              >
                Buy Now @ MRP Rs.{product.price}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
