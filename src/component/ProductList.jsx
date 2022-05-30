import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/product-list.scss";

const ProductList = ({ activeCategory }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const productList = await axios.get("http://localhost:8000/products");
    setProducts(productList.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product__container">
      {products.map((product) => {
        return activeCategory === "all" ||
          product.category === activeCategory ? (
          <ProductCard key={product.id} product={product} />
        ) : null;
      })}
    </div>
  );
};

export default ProductList;
