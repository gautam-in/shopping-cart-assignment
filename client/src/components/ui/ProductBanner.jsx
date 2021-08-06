import React from "react";
import { useHistory } from "react-router-dom";

function ProductBanner({ product }) {
  const { name, description, key, imageUrl, order } = product;
  const history = useHistory();
  const clickHandler = () => {
    history.push({
      pathname: "/products",
      state: { product_category: product },
    });
  }
  return (
    <div
      style={{ flexDirection: order % 2 === 0 ? "row-reverse" : "row" }}
      className="product-banner-container"
    >
      <img
        className="product-banner-image"
        src={imageUrl}
        alt="banner"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <p className="product-banner-name" >{name}</p>
        <p className="product-banner-description">{description}</p>
        <button
          className="button product-banner-btn"
          onClick={clickHandler}
        >
          Explore {key}
        </button>
      </div>
    </div>
  );
}

export default ProductBanner;
