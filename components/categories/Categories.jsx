/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import ErrorHandler from "../errorHandler/ErrorHandler";

import classes from "./Categories.module.css";

export default function Categories() {
  let [categories, setCategories] = useState({ data: [], error: null });

  useEffect(() => {
    fetch("http://localhost:5000/categories").then(async (res) => {
      const data = await res.json();
      if (!res.ok) {
        const error = (data && data.message) || res.statusText;
        setCategories({ ...categories, error: error });
        return Promise.reject(error);
      }
      setCategories({ ...categories, data: data });
      return data;
    });
  }, []);

  if (categories.error) return <ErrorHandler error={categories.error} />;

  return (
    categories.data.length > 0 &&
    categories.data.map((category) => (
      <Link key={category.id} href={`/products/${category.id}`}>
        <div className={classes.container}>
          <img
            className={classes.image}
            src={category.imageUrl}
            alt={category.name}
          ></img>
          <div className={classes.details}>
            <p className={classes.name}>{category.name}</p>

            <p className={classes.description}>{category.description}</p>

            <button className={classes.bttn}>Explore {category.name}</button>
          </div>
        </div>
      </Link>
    ))
  );
}
