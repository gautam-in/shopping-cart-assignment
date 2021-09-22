import React from "react";
import "./ProductCard.scss";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../redux/category/categoryAction";

export default function ProductCard({ data, id }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(setSelectedCategory(e.target.value));
    history.push("/listing");
  };
  return (
    <section className="product">
      <div className={id % 2 == 0 ? "card card-even" : "card card-odd"}>
        <div
          className={
            id % 2 == 0 ? "card-text card-text-odd" : "card-text center-display"
          }
        >
          <div className="card-text-title">{data.name}</div>
          <div className="card-text-desc">{data.description}</div>
          <button
            className="card-text-button"
            value={data.id}
            onClick={(id) => clickHandler(id)}
          >
            Explore {data.key}
          </button>
        </div>
        <div
          className={
            id % 2 == 0
              ? "card-image center-display card-image-odd"
              : "card-image center-display card-image-odd"
          }
        >
          <img
            src={data.imageUrl}
            alt={data.name}
            className="card-image-area"
            width="357"
            height="178"
          />
        </div>
      </div>
      <hr />
    </section>
  );
}
