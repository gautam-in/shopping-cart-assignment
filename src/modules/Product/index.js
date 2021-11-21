import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import ProductCategory from "../../components/ProductCategory";
import ProductCard from "../../components/ProductCard";

export default function Product() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const { filter } = useSelector((state) => state);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
        setData(data);
      } catch (e) {
        console.log("Error while fetching banner data", e);
      }
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
        setCategories(data);
      } catch (e) {
        console.log("Error while fething categories", e);
      }
    })();
  }, []);

  return (
    <main
      className="product container"
      id="products-list-container"
      role="main"
    >
      <ProductCategory category={categories} />
      <section
        id="products-cards-container"
        className="product-cards-container"
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
            ? data.map((item) => <ProductCard product={item} key={item.id} />)
            : data.map((item) =>
                item.category === filter ? (
                  <ProductCard product={item} key={item.id} />
                ) : null
              )}
        </ul>
      </section>
    </main>
  );
}
