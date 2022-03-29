// react
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @name Product
 * @returns Product Card JSX for Products Page
 */
const Product = ({ products, buttonHandler }) => {
  return (
    <div className="product__wrapper">
      {products?.map((product) => {
        const { id, name, imageURL, description, price } = product;
        return (
          <div key={id} className="product">
            <header className="product__header">
              <h3 className="product__header__title">{name}</h3>
            </header>
            <div className="product__body">
              <img className="product__image" src={imageURL} alt={name} />
              <p className="product__desc hide-in-small-device">{description}</p>
              {/* visible in small screens */}
              <div className="product__right-section">
                <p className="product__desc">{description}</p>
                <button
                  className="product__right-section__button"
                  onClick={() => buttonHandler(product)}>
                  Buy Now @ {price}
                </button>
              </div>
            </div>
            {/* large screen footer */}
            <footer className="product__lg-footer">
              <span className="product__lg-footer__price">{price}</span>
              <button className="product__lg-footer__button" onClick={() => buttonHandler(product)}>
                Buy Now
              </button>
            </footer>
            {/* mid screen footer */}
            <footer className="product__md-footer">
              <button className="product__md-footer__button" onClick={() => buttonHandler(product)}>
                Buy Now @ {price}
              </button>
            </footer>
          </div>
        );
      })}
    </div>
  );
};

Product.propTypes = {
  products: PropTypes.array,
  buttonHandler: PropTypes.func
};

export default Product;
