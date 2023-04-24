import React, { lazy, useState } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Products.module.scss";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { domain } from "../../utils/Constants";
import Loader from "../../Components/Common/Loader/Loader";

const ProductCard = lazy(() =>
  import("../../Components/ProductCard/ProductCard")
);
const Header = lazy(() => import("../../Components/Common/Header/Header"));

const Products = () => {
  const { categoryId } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const { data: products, loading: productsLoading } = useFetch(
    `${domain}/products`
  );
  const { data: categories, loading: categoriesLoading } = useFetch(
    `${domain}/categories`
  );

  const navigate = useNavigate();

  const handleFilter = (id) => {
    setOpenModal(false);
    setTimeout(() => {
      navigate(`/products/${id}`, { replace: true });
    }, 0);
  };
  const filteredProducts = products?.filter(
    (product) => product.category === categoryId || categoryId === "all"
  );

  const activeCategories =
    categories?.filter((category) => category.enabled) || [];

  return (
    <>
      <Header />
      <section className={`${styles.noPadding} pageSection`}>
        <aside className={styles.sidebar}>
          <ul className={styles.categoryList}>
            {activeCategories?.map((category) => {
              return (
                <li key={category.key}>
                  <>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.activeMenu : ""
                      }
                      to={`/products/${category.id}`}
                    >
                      {category.name}
                    </NavLink>
                  </>
                </li>
              );
            })}
            <li>
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeMenu : ""
                  }
                  to={`/products/all`}
                >
                  All
                </NavLink>
              </>
            </li>
          </ul>
        </aside>
        <section className={styles.mobileFilter}>
          <button
            className={styles.filterBtn}
            onClick={() => setOpenModal(true)}
          >
            Category Filter
          </button>
        </section>
        <ul className={styles.productGrid}>
          {filteredProducts?.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </ul>
      </section>

      {openModal && (
        <div className={styles.modalFilter} role="dialog">
          <button
            className={styles.modalCloseBtn}
            onClick={() => setOpenModal(false)}
          >
            X
          </button>
          <ul className={styles.categoryList}>
            {activeCategories?.map((category, idx) => {
              return (
                <li key={idx}>
                  <button
                    className={`filterBtn ${
                      category.id === categoryId ? styles.activeMenu : ""
                    }`}
                    onClick={() => handleFilter(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                className={`filterBtn ${
                  categoryId === "all" ? styles.activeMenu : ""
                }`}
                onClick={() => handleFilter("all")}
              >
                All
              </button>
            </li>
          </ul>
        </div>
      )}
      {(productsLoading || categoriesLoading) && <Loader />}
    </>
  );
};

export default Products;
