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
        cardData.map((el) => (
          <div key={el.id} className="listing-product-element">
            <div className="listing-product-element-title">{el.name}</div>
            <div className="listing-product-element-content">
              <img
                src={el.imageURL}
                alt={el.name}
                className="listing-product-element-image"
                height="120"
                width="100"
              />
              <div className="listing-product-element-desc">
                {el.description}
              </div>
            </div>
            <div className="listing-product-element-footer">
              <div className="price-lg">MRP Rs.{el.price}</div>
              <button className="listing-product-element-button button-lg">
                Buy Now
              </button>
              <button className="listing-product-element-button button-sm">
                Buy Now @ Rs.{el.price}
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1> No data</h1>
      )}
    </div>
  );
}
