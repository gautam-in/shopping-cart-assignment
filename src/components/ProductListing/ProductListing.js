import React, { useState, useEffect } from "react";
import "./ProductListing.css";
import Dropdown from "./Dropdown/Dropdown";
import Sidebar from "./Sidebar/Sidebar";
import useFilterProduct from "./FilterProduct";
import Card from "./Card/Card";

function ProductListing() {
  const { filteredCategory, filteredProduct, handleProduct } =
    useFilterProduct();
  return (
    <main className="product-container">
      <div className="desktopDisplay">
        {filteredCategory.length > -1 && filteredProduct.length > -1 && (
          <Sidebar
            filteredProduct={filteredProduct}
            filteredCategory={filteredCategory}
            handleProduct={handleProduct}
          />
        )}
      </div>
      <div className="mobileDisplay">
        {filteredCategory.length > -1 && filteredProduct.length > -1 && (
          <Dropdown
            items={[...filteredCategory, { id: "", name: "All Products" }]}
            handleProduct={handleProduct}
            filteredProduct={filteredProduct}
          />
        )}
      </div>
      <div className="card">
        {filteredProduct.length > -1 &&
          filteredProduct.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              imageUrl={product.imageURL}
              name={product.name}
              price={product.price}
              stock={product.stock}
              description={product.description}
            />
          ))}
      </div>
    </main>
  );
}

export default ProductListing;
