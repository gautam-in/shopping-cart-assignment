import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../Button';
import React from 'react';
import { StyledProductCard } from './ProductCard.styled';
import { addProductToCart } from '../../../redux/slices/cart';
import { addItemToCart } from '../../../services/ApiService';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const ProductCard = ({ productId, imageSrc, name, description, price }) => {
  const dispatch = useDispatch();
  const notify = (productResponse) => toast(`${productResponse} !`);
  
  const productHandler = () => {
    dispatch(addItemToCart({ product_id: productId }))
    .then(unwrapResult)
    .then((product) => {
      dispatch(addProductToCart(product.data));
    })
    .catch((error) => error);
    notify('Product added to cart successfully');
  };

  return (
    <StyledProductCard id={productId} className="product-card">
      <h3>{name}</h3>
      <div className="card-info">
        <img src={imageSrc} alt={name} />
        <p>{description}</p>
      </div>
      <div className="card-price">
        <span>MRP Rs.{price}</span>
        <Button onClick={productHandler}>Buy Now</Button>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </StyledProductCard>
  );
};

export default ProductCard;
