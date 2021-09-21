import React from "react";
import "./Listing.scss";
import CategoryList from "../../components/CategoryList/CategoryList";

export default function Listing() {
  let categoryData, categoryLoading, categoryError;
  const storageData = localStorage.getItem("category-list");

  if (storageData && JSON.parse(storageData)?.length) {
    categoryData = JSON.parse(storageData);
  } else {
    [categoryData, categoryLoading, categoryError] = useFetch(
      "http://localhost:5000/categories"
    );
    localStorage.setItem("category-list", JSON.stringify(categoryData));
  }

  return (
    <section>
      <CategoryList data={categoryData}/>
    </section>
  );
}
