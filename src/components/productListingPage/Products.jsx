import { Outlet } from 'react-router-dom'
import { useProducts } from '../../context/productContext'
import { SingleProduct, Filter } from "./../index-components"
import "../../styles/product/Product.css"
import React from 'react';
const Products = () => {
    const { productState, isDesktopOrLaptop } = useProducts()
    const { productsData, closeCartModel } = productState

  return (
    <div className = "product-details-container">
       { isDesktopOrLaptop && (!closeCartModel && <div className = "cart-model-wrapper" data-testid = "cart-outlet">
      <div className = "cart-model-parentWrapper">
        <Outlet />
      </div>
     </div>)}
      <div className = "flex product-main-container bg-color">
        <Filter />
        <div className = "single-product-container">
            { productsData.map((product) => {
                return <SingleProduct key = {product.id} product = {product}/>
            })}
        </div>
        
    </div>
   
    </div>
  )
}

export default Products