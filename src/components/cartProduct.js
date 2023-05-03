import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../store/reducers/cartReducer';
import '../styles/cartProduct.scss';

const CartProduct = ({product, totalCount}) => {
    console.log(product);
    const dispatch=useDispatch();
const incrementProduct = () => {
    dispatch(incrementQuantity(product))
}
const decrementProduct = () => {
    dispatch(decrementQuantity(product))
}
    return(
        <>
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
        </>
    )
}

export default CartProduct;