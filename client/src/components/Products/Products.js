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
          <div key={index} className=''>
            <div>{product.name}</div>
            <img src={product.imageURL}></img>
            <div>{product.description}</div>
            <div>{product.price}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
