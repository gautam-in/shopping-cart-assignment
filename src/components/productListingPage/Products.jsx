import { Outlet } from 'react-router-dom'
import { useProducts } from '../../context/productContext'
import { SingleProduct, Filter } from "./../index-components"
import "./Product.css"
import React, { useEffect } from 'react';
import { getFetch } from '../../customHooks/getFetch';
const Products = () => {
    const { productState, isDesktopOrLaptop, dispatch } = useProducts()
    const { productsData, closeCartModel } = productState
    useEffect(() => {
      getFetch("http://localhost:4000/productsJSON").then((res) => dispatch({type:"GET_PRODUCTS_DATA", payload: res})).catch((e) => console.log(e))
    },[])
    
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