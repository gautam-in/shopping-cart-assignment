import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";

const baseUrl = "http://localhost:3000/api/categories";

export default function HomeCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setCategories(response.data);
    });
  }, []);
  return (
    <>
      {categories
        .sort((a, b) => a.order - b.order)
        .filter(function (elem) {
          return elem.order >= 0;
        })
        .map((category) => {
          return (
            <Category
              key={category.key}
              description={category.description}
              imageUrl={category.imageUrl}
              order={category.order}
              name={category.name}
              categoryKey={category.key}
              id={category.id}
            />
          );
        })}
    </>
  );
}
