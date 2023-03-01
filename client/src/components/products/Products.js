import React, { lazy, useEffect, useState } from "react";
import { FaCogs } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import useFetchCollection from "../../customHooks/useFetchCollection";
import { selectProducts, STORE_PRODUCTS } from "../../redux/slice/productSlice";

import styles from "./Products.module.scss";

const ProductFilter = lazy(() => import("./productFilter/ProductFilter"));
const ProductList = lazy(() => import("./productList/ProductList"));

const Products = () => {
  const { data, isLoading } = useFetchCollection("products");
  const [showFilter, setShowFilter] = useState(false);

  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );
  }, [dispatch, data]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <section id="products">
        <div className={`${styles.product}`}>
          <aside
            className={
              showFilter
                ? `${styles.filter} ${styles.show}`
                : `${styles.filter}`
            }
          >
            {isLoading ? null : <ProductFilter />}
          </aside>
          <div className={styles.content}>
            {isLoading ? (
              <picture>
                <source
                  srcset="/static/images/spinner.webp"
                  type="image/webp"
                ></source>
                <img
                  src="/static/images/spinner.jpg"
                  alt="Loading.."
                  style={{ width: "50px" }}
                  className="--center-all"
                />
              </picture>
            ) : (
              // <img
              //   src={spinnerImg}
              //   alt="Loading.."
              //   style={{ width: "50px" }}
              //   className="--center-all"
              //   loading="lazy"
              // />
              <ProductList products={products} />
            )}
            <div className={styles.icon} onClick={toggleFilter}>
              <FaCogs size={20} color="orangered" />
              <p>
                <b>{showFilter ? "Hide Filter" : "Show Filter"}</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
