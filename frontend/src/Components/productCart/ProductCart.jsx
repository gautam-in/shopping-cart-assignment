import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cartSlice';
import './productCart.scss';

const ProductCart = (data) => {
  const {name,imageURL,description,price}=data.data;
  const dispatch=useDispatch();
  const productFromCart=useSelector(state=>state.cart.products)
  const addProduct=()=>{
       dispatch(addItemToCart(data))
  }
 
  return (
    <div className='cart__container'>
        <h2>{name}</h2> 
        <img src={imageURL} alt={name}/>
        <p className='product__description'>{description}</p>

        <div className='price__container'>
          <p>MRP Rs.{price}</p>
          <button onClick={()=>addProduct(data)}>Buy now</button>
        </div>
    </div>
  )
}

export default ProductCart