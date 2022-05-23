import React from "react";
import "./product.css";
function Product({ pname, imageURL, description, price }) {
  imageURL = "logo.png";
  return (
    <section className="product">
      <h3>{pname}</h3>
      <img src={imageURL}></img>
      <p>{description}</p>
      <div className="mrp-button">
        <h5>MRP Rs {price} </h5>
        <button> Buy Now</button>
      </div>
    </section>
  );
}

export default Product;
