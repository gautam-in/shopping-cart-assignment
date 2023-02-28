import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <h1>Products list..</h1>
    <Link to='/products/1'>Product 1</Link>
    <Link to='/products/2'>Product 2</Link>

    </>
  )
}

export default Products