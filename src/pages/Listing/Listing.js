import React, { useState, useEffect } from "react";
import "./Listing.scss";
import CategoryList from "../../components/CategoryList/CategoryList";
import CategoryDropdown from "../../components/CategoryDropDown/CategoryDropdown";
import ListingList from "../../components/ListingList/ListingList";

export default function Listing() {
  let categoryData, categoryLoading, categoryError;
  const storageData = localStorage.getItem("category-list");
  const [width, setWidth] = useState(window.innerWidth);

  if (storageData && JSON.parse(storageData)?.length) {
    categoryData = JSON.parse(storageData);
  } else {
    [categoryData, categoryLoading, categoryError] = useFetch(
      "http://localhost:5000/categories"
    );
    localStorage.setItem("category-list", JSON.stringify(categoryData));
  }

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      {width > 768 ? (
        <div className="list">
          <CategoryList data={categoryData} />
          <ListingList />
        </div>
      ) : (
        <>
          <CategoryDropdown data={categoryData} />
          <ListingList />
        </>
      )}
    </section>
  );
}
