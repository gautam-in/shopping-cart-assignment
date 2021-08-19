import React from "react";
import "./categoryMenu.scss";
import { useQuery } from "react-query";
import axios from "axios";

const CategoryMenu = ({ setActiveCategory, activeCategory }) => {
  // Queries
  const { isLoading, isError, data } = useQuery("categories", async () => {
    const { data } = await axios.get("http://localhost:5000/categories");
    data.sort((a, b) => (a.order < b.order ? -1 : 1));
    return data;
  });

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Something went wrong ...</p>;

  return (
    <ul className="category_menu">
      {data.map(({ name, id }, i) => (
        <li
          className={`menu_item ${activeCategory === id && "active_item"}`}
          key={id}
          onClick={() =>
            setActiveCategory(activeCategory !== id ? id : undefined)
          }
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryMenu;
