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
      <div className='image-description-container'>
        <div className='image'>
          <img src={product.imageURL}></img>
        </div>
        <div className='description' >{product.description}</div>
      </div>
      <div className='price-container desktop'>
        <div className='price'>MRP Rs.{product.price}</div>
        <button className='button' onClick={() => handleBuyNow(product)}>
          Buy Now
        </button>
      </div>
      <div className='price-container tablet'>
        <button className='button' onClick={() => handleBuyNow(product)}>
          Buy Now @ Rs.{product.price}
        </button>
      </div>
      <div className='mobile-image-description-container'>
        <div className='image'>
          <img src={product.imageURL}></img>
        </div>
        <div className='description-price-container'>
          <div className='description' >{product.description}</div>
          <button className='button' onClick={() => handleBuyNow(product)}>
            Buy Now @ Rs.{product.price}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product