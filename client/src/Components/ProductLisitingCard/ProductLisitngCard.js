import React from "react";
import { useDispatch } from "react-redux";
import "./ProductListingCard.css";
import { addItem } from "../Store/Actions/CartActions";

const Card = ({ category }) => {
  const dispatch = useDispatch();
  const handleCartButton = () => {
    dispatch(addItem(category));
  };
  return (
    <div key={category.key} className="productcategory">
      <div className="productcontent">
        <div className="productheading">{category.name}</div>
        <div className="productimageClass">
          <img src={category.imageURL} alt="category" />
        </div>
        <div className="productdescription">{category.description}</div>
        <div className="productpriceCard">
          <p>{`MRP Rs.${category.price}`}</p>
          <button className="productexploreButton" onClick={handleCartButton}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
