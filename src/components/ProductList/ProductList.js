import React from "react";
import useFetch from "../../utilities/helper/customHooks";
import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList() {
  let data, loading, error;
  const storageData = localStorage.getItem("category-list");
  if (storageData && JSON.parse(storageData)?.length) {
    data = JSON.parse(storageData);
  } else {
    [data, loading, error] = useFetch("http://localhost:5000/categories");
    localStorage.setItem("category-list", JSON.stringify(data))
  }

  return (
    <>
      {loading ? (
        <h1> Loading</h1>
      ) : error ? (
        <h1>Error Occured</h1>
      ) : (
        data &&
        data.map((el, index) => (
          <ProductCard key={el.id} data={el} id={index} />
        ))
      )}
    </>
  );
}
