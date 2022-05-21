import React from "react";
import "./product.css";
function Product() {
  return (
    <section className="product">
      <h3>product name</h3>
      <img src="apple.jpg"></img>
      <p>
        In publishing and graphic designcddd, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without
      </p>
      <div className="mrp-button">
        <h5>MRP RS. 123</h5>
        <button> Buy Now</button>
      </div>
    </section>
  );
}

export default Product;
