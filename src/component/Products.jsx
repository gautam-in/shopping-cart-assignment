import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import { useParams } from "react-router-dom";
import "../styles/products.scss";

const Products = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const productsList = await axios.get("http://localhost:8000/products");
    setProducts(productsList.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {categoryId
        ? products
            .filter((product) => product.category === categoryId)
            .map((product) => <Product key={product.id} product={product} />)
        : products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
    </div>
  );
};
export default Products;
