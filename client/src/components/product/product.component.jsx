import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './product.styles.scss';

const Product = ({ item, addItem }) => {
  const { name, sku, imageURL, description, price } = item;
  return (
    <div className="product">
      <h3 className="name">{name}</h3>
      <div className="product-info">
        <div className="product-image">
          <img src={imageURL} alt={sku} />
        </div>
        <div className="product-buy">
          <div className="description">{description}</div>
          {window.screen.width < 500 && (
            <CustomButton onClick={() => addItem(item)}>
              Buy Now @ MRP Rs. {price}
            </CustomButton>
          )}
        </div>
      </div>
      <div
        className="price"
        style={{ display: window.screen.width > 819 ? 'flex' : 'none' }}
      >
        {/* {window.screen.width > 819 && ( */}
        <>
          {window.screen.width >= 1024 && <span>MRP Rs.{price}</span>}
          <CustomButton onClick={() => addItem(item)}>
            {window.screen.width >= 1024
              ? 'Buy Now'
              : `Buy Now @ MRP Rs. ${price}`}
          </CustomButton>
        </>
        {/* )} */}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Product);
// export default Product;
