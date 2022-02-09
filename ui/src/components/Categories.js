import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Card, Button } from "react-bootstrap";
import CategoryA from "./CategoryA";
import CategoryB from "./CategoryB";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then(({ data }) => {
        data.sort((a, b) => a.order - b.order);
        setCategories(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {categories.map((category) => {
        if (category.order > 0 && category.order % 2 === 0)
          return <CategoryA {...category} />;
        else if (category.order > 0 && category.order % 2 !== 0)
          return <CategoryB {...category} />;
        else return null;
      })}
    </div>
  );
}
