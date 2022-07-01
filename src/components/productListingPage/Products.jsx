import React from 'react'
import { Outlet } from 'react-router-dom'
import { useProducts } from '../../context/productContext'
import { SingleProduct, Filter } from "./../index-components"
import "./Product.css"
const Products = () => {
    const { productState, isDesktopOrLaptop } = useProducts()
    const { productsData, closeCartModel } = productState
  return (
    <div className = "product-details-container">
      <div className = "flex product-main-container bg-color">
        <Filter />
        <div className = "single-product-container">
            { productsData.map((product) => {
                return <SingleProduct key = {product.id} product = {product}/>
            })}
        </div>
        
    </div>
    { isDesktopOrLaptop && (!closeCartModel && <div className = "cart-model-wrapper">
      <div className = "cart-model-parentWrapper">
        <Outlet />
      </div>
     </div>)}
    </div>
  )
}

export default Products