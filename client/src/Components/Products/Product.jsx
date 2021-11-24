import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Products.module.css";

export const Product = () => {
  const [category, setCategory] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((data) => {
      setCategory(data);
    });
  }, []);

  console.log(category);

  return (
    <div className="pb-16">
      {category?.data?.map((item, index) => (
        <div
          className={classNames(
            index % 2 === 0 ? styles.row : styles.rowReverse,
            "p-10  sm:flex-col"
          )}
          key={item?.id}
        >
          <img
            className="w-1/5 sm:w-1/3 sm:mr-2"
            src={item?.imageUrl}
            alt={item?.name}
          />
          <div className={classNames(styles.description)}>
            <h1 className="mb-5 font-bold sm:text-sm">{item?.name}</h1>
            <p className="mb-5 text-sm sm:text-xs">{item?.description}</p>
            <Link to={`/products/${item.id}`} className="mx-auto">
              <button
                className={classNames(
                  styles.buttonBackground,
                  "p-2 text-white"
                )}
              >
                <p className="sm:text-xs"> Explore {item.name}</p>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
