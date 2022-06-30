import React from 'react'
import { useProducts } from '../../context/productContext'
import { SingleProduct, Filter } from "./../index-components"
import "./Product.css"
const Products = () => {
    const { productState } = useProducts()
    const { productsData } = productState
   
  return (
    <div className = "flex product-main-container">
        <Filter />
        <div className = "single-product-container">
            { productsData.map((product) => {
                return <SingleProduct key = {product.id} product = {product}/>
            })}
        </div>
    </div>
  )
}

export default Products