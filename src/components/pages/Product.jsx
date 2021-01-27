import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import ProductList from "../ProductList";
import ProductCard from "../ProductCard";

function Product() {
  const [data, setData] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const { filter } = useSelector((state) => state);
  console.log(data);
  console.log(categories);
  React.useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setData(res.data);
    });
    axios.get("http://localhost:5000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <main
      className="product container"
      id="products-list-container"
      role="main"
    >
      <ProductList category={categories} />
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
          role="list"
        >
          {filter == null &&
            data.length > 0 &&
            data.map((item) => <ProductCard product={item} key={item.id} />)}
          {filter != null &&
            data.length > 0 &&
            data.map((item) =>
              item.category == filter ? (
                <ProductCard product={item} key={item.id} />
              ) : null
            )}
        </ul>
      </section>
    </main>
  );
}

export default Product;
