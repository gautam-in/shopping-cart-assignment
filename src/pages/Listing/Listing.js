import React from "react";
import "./Listing.scss";
import { useSelector } from "react-redux";

export default function Listing() {
  const loginState = useSelector((state) => state.category.categoryId);
  return (
    <>
      <h1>This is Listing page - {loginState} </h1>
    </>
  );
}
