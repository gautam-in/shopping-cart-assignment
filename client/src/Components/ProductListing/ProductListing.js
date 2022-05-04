import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import ProductListingCard from "../ProductLisitingCard/ProductLisitngCard";
import "./ProductListing.css";

const ProductListing = () => {
  const [productsData, setproductsData] = useState(null);
  const [categoryData, setcategoryData] = useState(null);
  const [categoryId, setCategoryId] = useState("5b6899953d1a866534f516e2");

  useEffect(() => {
    const data = async () => {
      const response = await fetch("http://localhost:8080/products");
      const responseJson = await response.json();
      const categories = await fetch("http://localhost:8080/categories");
      const categoriesJson = await categories.json();
      setcategoryData(categoriesJson);
      setproductsData(responseJson);
    };
    data();
  }, []);
  return (
    <>
      <Header />
      <div className="productPage">
        <div className="sidenav">
          {categoryData &&
            categoryData
              .sort((a, b) => a.order - b.order)
              .map(
                (item, index) =>
                  item.enabled && (
                    <div key={index}>
                      <button
                        className="categoryButton"
                        onClick={() => setCategoryId(item.id)}
                      >
                        {item.name}
                      </button>
                      <hr />
                    </div>
                  )
              )}
        </div>
        <div className="cards">
          {productsData &&
            productsData
              .sort((a, b) => a.order - b.order)
              .map((item, i) => {
                return (
                  categoryId === item.category && (
                    <ProductListingCard key={i} category={item} />
                  )
                );
              })}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
