import React from 'react'

const SingleProduct = ({product}) => {
  return (
    <section className = "product-wrapper">
      <h3>{product.name}</h3>
      <div className = "flex productInfo-wrapper">
        <div className = "product-img-wrapper">
          <img src = { product.imageURL } alt = { product.name} className = "product-image"/>
        </div>
        <div className = "flex product-text-wrapper">
          <p className = "product-description">{product.description.split("").slice(0, 90).join("")}</p>
          <button className = "product-buy-btn">BuyNow @ MRP RS.{product.price}</button>
        </div>
      </div>
      <button className = "buy-btn">BuyNow @ MRP RS.{product.price}</button>
    </section>
  )
}

export default SingleProduct