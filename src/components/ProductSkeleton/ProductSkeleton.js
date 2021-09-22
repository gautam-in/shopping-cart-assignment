import React from "react";
import "./ProductSkeleton.scss";

export default function ProductSkeleton() {
  const arr = new Array(6).fill(true);
  return (
    <div className="product-skeleton">
      {arr.map((el, index) => (
        <div key={index} className="box">
          <div className="skeleton skeleton-text"></div>
          <div className="box-item skeleton"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      ))}
    </div>
  );
}
