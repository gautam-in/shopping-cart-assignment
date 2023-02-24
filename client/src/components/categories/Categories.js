import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchCollection from "../../customHooks/useFetchCollection";
import {
  selectCategories,
  SET_ACTIVE_CATEGORY,
  STORE_CATEGORIES,
} from "../../redux/slice/categorySlice";
import { FILTER_BY_CATEGORY } from "../../redux/slice/filterSlice";
import { selectProducts } from "../../redux/slice/productSlice";
import Loader from "../loader/Loader";
import styles from "./Categories.module.scss";

const Categories = ({ setCategories }) => {
  const { data, isLoading } = useFetchCollection("categories");
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    const itemId = event.target.getAttribute("data-item-id");
    dispatch(FILTER_BY_CATEGORY({ products, category: itemId }));
    dispatch(SET_ACTIVE_CATEGORY({ category: itemId }));
    const element = document.getElementById("products");
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: y,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    dispatch(
      STORE_CATEGORIES({
        categories: data,
      })
    );
  }, [dispatch, data]);
  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.categories}>
        {categories.map((category, index) => {
          const { imageUrl, id, description, name, key } = category;
          return (
            <div key={id} className={styles.category}>
              <img src={imageUrl} alt={name} />
              <div className={styles.details}>
                <h3>{name}</h3>
                <p>{description}</p>
                <button
                  className="--btn --btn-primary"
                  data-item-id={id}
                  onClick={handleClick}
                >
                  Explore {key}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
