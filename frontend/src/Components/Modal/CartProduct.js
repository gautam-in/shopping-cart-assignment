import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, decrementQuantity, incrementQuantity } from '../../store/cart/cartSlice';
import './cartProduct.scss';

const CartProduct = ({product,totalCount}) => {
  
  const dispatch=useDispatch();
  const products=useSelector(state=>state.cart.products)
  const incrementProduct=(product)=>{
    dispatch(incrementQuantity(product))
  }

  const decrementProduct=(product)=>{
    console.log('decremetn');
    dispatch(decrementQuantity(product))
  }
  console.log(products);
  return (
          <section className='cart-section'>
            <img className='cart-section__img' src={product.imageURL} alt={product.name}/>
            <h2 className='cart-section__title'>{product.name}</h2>  
            <div className='counter'>              
                <button className='counter__button' onClick={()=>decrementProduct(product)}>-</button>
                <p>{product.quantity}</p>
                <button className='counter__button' onClick={()=>incrementProduct(product)}>+</button> 
                <p>✕</p>
                <p>{product.price }</p>
            </div>
            <p>Rs.{product.price * product.quantity}</p>
           </section>
  
  )
}

export default CartProduct