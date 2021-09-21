import React, { useState, useEffect } from "react";
import "./ListingCard.scss";
import { useSelector } from "react-redux";

export default function ListingCard({ data }) {
  const selectedCategory = useSelector((state) => state.category.categoryId);
  const [cardData, setCardData] = useState(data ? data : "");

  useEffect(() => {
    if (selectedCategory && data) {
      let filteredData = data.filter((el) => el.category === selectedCategory);
      setCardData(filteredData);
    } else {
      setCardData(data ? data : "");
    }
  }, [selectedCategory]);

  return (
    <div className="listing-product">
      {cardData && cardData.length ? (
        cardData.map((el) => <h1> {el.name}</h1>)
      ) : (
        <h1> No data</h1>
      )}
    </div>
  );
}
