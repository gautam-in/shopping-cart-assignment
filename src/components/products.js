import React from 'react';
import {useDispatch} from 'react-redux';
import { addItemToCart } from '../store/reducers/cartReducer';
import '../styles/products.scss';
 const Products = ({data}) => {
    const {name,imageURL,description,price}=data;
    const dispatch = useDispatch();
   
   const addProducts =() => {
    console.log("indise products", data);
     dispatch(addItemToCart(data));
   }
    return (
      <div className='cart__container'>
          <h2>{name}</h2> 
          <img src={imageURL} alt={name}/>
          <p className='product__description'>{description}</p>
  
          <div className='price__container'>
            <p>MRP Rs.{price}</p>
            <button onClick={() => addProducts(data)}>Buy now</button>
          </div>
      </div>
    )
  
 }

 export default Products;
