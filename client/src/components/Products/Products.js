import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  selectorCategory
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
  const selectedCategory = useSelector(selectorCategory)

  return (
    <div className='products'>
      {products && products.map((product, index) => {
        if (selectedCategory === '') {
          return <Product product={product} index={index} key={index} />
        } else if (product.category === selectedCategory) {
          return <Product product={product} index={index} key={index} />
        }
      })}
    </div>
  )
}

export default Products
