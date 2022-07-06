import React, { useEffect, useState } from 'react'
import { useProducts } from '../../context/productContext'
import { QuantityButton } from "./../index-components"
const SingleProduct = ({product}) => {
  const { productState, dispatch } = useProducts()
  const { cartData } = productState
  const [itemInCart, setItemInCart] = useState(false)
  
  const addToCartHandler = () => {
    const cartProductData = {...product, quantity: 1 }
    dispatch({type: "ADD_TO_CART", payload: [...cartData,cartProductData] })
  }
  useEffect(() => {
    const isItemInCart = cartData.find((item) => item.id === product.id)
    if(isItemInCart){
      setItemInCart(() => true)
    }
    else {
      setItemInCart(() => false)
    }
  },[cartData])
  
  return (
    <section className = "product-wrapper">
      <h3>{product.name}</h3>
      <div className = "flex productInfo-wrapper">
        <div className = "product-img-wrapper">
          <img src = {`/${product.imageURL}`} alt = { product.name} className = "product-image"/>
        </div>
        <div className = "flex product-text-wrapper">
          <p className = "product-description">{product.description.split("").slice(0, 90).join("")}</p>
          {itemInCart ? <div className = "product-buy-btn quat-comp-wrapper"><QuantityButton product = { product }/></div> : <button className = "product-buy-btn" onClick = { addToCartHandler }>BuyNow @ MRP RS.{product.price}</button> }
        </div>
      </div>
      {itemInCart ? <div className = "buy-btn quat-comp-wrapper"><QuantityButton product = { product }/></div> : <button className = "buy-btn" onClick = { addToCartHandler }>BuyNow @ MRP RS.{product.price}</button> }

    </section>
  )
}

export default SingleProduct