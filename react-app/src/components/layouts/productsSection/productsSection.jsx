import React from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../../store/entities/items";
import "./productsSection.scss";

function ProductsSection() {
  const products = useSelector(getProducts);
  console.log(products);

  return (
    <div className="productsContainer">
      {products.map((prd, index) => (
        <div className="eachProduct" key={prd?.id}>
          <div className="productName">{prd?.name}</div>
          <div className="imgDescSection">
            <div className="productImg">
              <img
                variant="top"
                src={prd?.imageURL}
                className="imgStyle"
                alt={prd.name}
              />
            </div>
            <div className="desc">{prd?.description}</div>
          </div>
          <div className="belowSec">
            <div>MRP Rs. {prd?.price}</div>
            <button className="buyBtn">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsSection;
