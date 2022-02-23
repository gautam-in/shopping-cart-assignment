import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductCategory from "../../components/ProductCategory";
import ProductTile from "../../components/ProductTile";
import { get } from "../../utils";

const Product = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const { filter } = useSelector((state) => state);

  useEffect(() => {
    get("products").then(({ data }) => {
      setData(data);
    });
    get("categories").then(({ data }) => {
      setCategories(data);
    });
  }, []);

  return (
    <main
      className="product container"
      id="products-list-container"
      role="main"
    >
      <ProductCategory category={categories} />
      <section
        id="products-cards-wrapper"
        className="product-cards-wrapper"
      >
        <ul
          className="product-list"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            padding: 0,
            margin: 0,
            listStyle: "none",
          }}
        >
          {filter === null && data.length > 0
            ? data.map((item) => <ProductTile product={item} key={item.id} />)
            : data
                .filter((item) => item.category === filter)
                .map((item) => <ProductTile product={item} key={item.id} />)}
        </ul>
      </section>
    </main>
  );
};

export default Product;