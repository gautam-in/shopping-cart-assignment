import React from "react";
import "./ProductCard.scss";

export default function ProductCard({ data, id }) {
  return (
    <section className="product">
      <div className={id % 2 == 0 ? "card card-even" : "card card-odd"}>
        <div className= {id % 2 == 0 ? "card-text card-text-odd" : "card-text center-display"} >
          <div className="card-text-title">{data.name}</div>
          <div className="card-text-desc">{data.description}</div>
          <button className="card-text-button"> Explore {data.key}</button>
          </div>
        <div className= {id % 2 == 0 ? "card-image center-display card-image-odd" : "card-image center-display card-image-odd"}>
          <img
            src={data.imageUrl}
            alt={data.name}
            className="card-image-area"
          />
        </div>
      </div>
      <hr />
    </section>
  );
}
