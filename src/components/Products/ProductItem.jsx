import React from 'react';

const ProductItem = ({ product, addToCart }) => (
  <div key={product.id} className="product-list__item">
    <h1 className="product-list__item--title">{product.name}</h1>
    <div className="product-list__item-description">
      <img className="product-list__item--image" src={product.imageURL} alt={product.description} />
      <div className="product-list__item--info">
        {/* <div> */}
        {product.description}
        {/* </div> */}
      </div>
      <button
        type="button"
        disabled={product.stock - product.count === 0}
        className="btn m-btn-buy"
        onClick={() => addToCart(product)}
      >
        {`Buy Now @ Rs.${product.price}`}
      </button>
    </div>
    <div className="product-list__item--action">
      <span className="product-list__item--action-mrp">
        {`MRP Rs.${product.price}`}
      </span>
      <button
        type="button"
        disabled={product.stock - product.count === 0}
        className="btn product-list__item--action-buy"
        onClick={() => addToCart(product)}
      >
        Buy Now
      </button>
    </div>
  </div>
);

ProductItem.defaultProps = {
  product: {},
  addToCart: () => {},
};

export default ProductItem;
