import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import './Product.css'

function Product({ index, product }) {
  const dispatch = useDispatch()
  const handleBuyNow = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div key={index} className='product'>
      <div className='name'>{product.name}</div>
      <div className='image'>
        <img src={product.imageURL}></img>
      </div>
      <div className='description' >{product.description}</div>
      <div className='price-container'>
        <div className='price'>MRP Rs.{product.price}</div>
        <button className='button' onClick={() => handleBuyNow(product)}>
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default Product