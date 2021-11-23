import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { SideBar } from "../../Components/SideBar/SideBar";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import classNames from "classnames";
import styles from "./Products.module.css";
import axios from "axios";
import { useAlert } from "react-alert";

export const Products = () => {
  const [categories, setCategories] = useState([]);
  const params = useParams();
  const { categoryId } = params;
  const alert = useAlert();

  const LoadProducts = useCallback(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        if (res.status !== 200) {
          alert.error("Something went wrong");
        }
        if (categoryId) {
          setCategories(filterhandler(categoryId, res.data));
        } else setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  useEffect(() => {
    LoadProducts();
  }, [LoadProducts]);

  const filterhandler = (catId, data) => {
    let filteredCategory = data;
    filteredCategory = data?.filter((item) => item.category === catId);
    return filteredCategory;
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="h-screen pt-24 fixed bg-gray-100">
          <SideBar />
        </div>
        <div
          className={classNames(
            "grid w-4/5 ml-52 pt-24 h-1/3 grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-2 gap-2"
          )}
        >
          {categories?.map((item) => (
            <div
              key={item?.id}
              className={classNames(
                styles.itemBorder,
                "w-full h-3/4 p-4 shadow-md"
              )}
            >
              <h3
                className={classNames(
                  styles.itemHead,
                  "h-12 text-sm lg:text-xs"
                )}
              >
                {item?.name}
              </h3>
              <img
                className="h-1/3 lg:h-1/4 mt-5 sm:h-1/3  mx-auto bg-black"
                src={item?.imageURL}
                alt={item?.sku}
              />
              <p
                className={classNames(
                  "text-xs bg-gray-100 p-2 h-12 mt-5 w-full truncate lg:h-10"
                )}
              >
                {item?.description}
              </p>
              <div
                className={classNames(
                  styles.itemButs,
                  "flex justify-between items-center mt-4"
                )}
              >
                <span className="text-sm lg:text-xs">MRP Rs.{item?.price}</span>
                <button
                  className={classNames(styles.buttonBackground, "text-sm p-1")}
                >
                  <p className="text-white lg:text-xs"> Buy Now</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
