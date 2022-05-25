import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/products').then((response) => {
      setProducts(response.data)
    })
  }, [])

  return (
    <div className='products'>
      {products && products.map((product, index) => {
        return (
          <div key={index} className='product'>
            <div className='name'>{product.name}</div>
            <div className='image'>
              <img src={product.imageURL}></img>
            </div>
            <div className='description' >{product.description}</div>
            <div className='price-container'>
              <div className='price'>MRP Rs.{product.price}</div>
              <button className='button'>
                Buy Now
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
