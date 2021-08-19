import React from "react";
import "./category.scss";
import { useQuery } from "react-query";
import axios from "axios";

const Category = () => {
  // Queries
  const { isLoading, isError, data } = useQuery("categories", async () => {
    const { data } = await axios.get("http://localhost:5000/categories");
    data.sort((a, b) => (a.order < b.order ? -1 : 1));
    return data;
  });

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Something went wrong ...</p>;

  console.log(data);

  return data.map(({ imageUrl, description, name, key, id }, i) => (
    <section className="category" key={id}>
      <img
        src={imageUrl}
        className={`categoryImg ${i % 2 && "rightImg"}`}
        alt={name}
      />
      <div className="categoryInfo">
        <h3 className="categoryName">{name}</h3>
        <p className="categoryDescription">{description}</p>
        <button className="exploreButton">Explore {key}</button>
      </div>
    </section>
  ));
};

export default Category;
