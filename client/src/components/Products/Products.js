import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  selectorCategoryId
} from '../../features/category/categorySlice'
import Product from '../Product'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/products').then((response) => {
      setProducts(response.data)
    })
  }, [])
  const selectedCategoryId = useSelector(selectorCategoryId)

  return (
    <div className='products'>
      {products && products.map((product, index) => {
        if (selectedCategoryId === '') {
          return <Product product={product} index={index} key={index} />
        } else if (product.category === selectedCategoryId) {
          return <Product product={product} index={index} key={index} />
        }
      })}
    </div>
  )
}

export default Products
