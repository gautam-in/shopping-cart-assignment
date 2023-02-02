import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../shopping-cart/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="col-md-6 col-lg-3 product mb-5">
      <div className="heading">
        <h1>{product.name.substring(0, 46)}</h1>
      </div>
      <div className="row justify-content-center">
        <div className="product-image text-center col-6 col-md-6 col-lg-12">
          <img src={product.imageURL} alt={product.name} />
        </div>
        <div className=" col-6 col-md-6 col-lg-12 ">
          <p className="description">{product.description.substring(0, 120)}</p>
          <button
            onClick={() => dispatch(addItemToCart(product))}
            className="buy-btn w-100 mt-md-2 d-md-none w-100"
          >
            Buy Now @ Rs. {product.price}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-stretch justify-content-lg-between align-items-center">
          <div className="price d-none d-lg-block role" aria-label="price">
            <span aria-label="Rupees">Rs:</span> <h2> {product.price}</h2>
          </div>
          <div className="buy-btn d-none d-lg-block text-end">
            <button onClick={() => dispatch(addItemToCart(product))}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-100 mt-md-3 d-none d-md-block d-lg-none text-end justify-content-stretch">
        <button
          onClick={() => dispatch(addItemToCart(product))}
          className="w-100"
        >
          Buy Now @ Rs. {product.price}
        </button>
      </div>
    </article>
  );
}

export default ProductItem;
