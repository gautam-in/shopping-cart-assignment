import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchCollection from "../../customHooks/useFetchCollection";
import {
  selectCategories,
  STORE_CATEGORIES,
} from "../../redux/slice/categorySlice";
import Loader from "../loader/Loader";
import styles from "./Categories.module.scss";

const Categories = ({ setCategories }) => {
  const { data, isLoading } = useFetchCollection("categories");
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();
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
                <button className="--btn --btn-primary">Explore {key}</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
