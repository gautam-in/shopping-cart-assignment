import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductSidebar from "./ProductSidebar";
import { ProductMain, ProductWrapper } from "./productStyles";

const baseUrl = "http://localhost:3000/api/products";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ProductMain>
      <ProductSidebar />
      <ProductWrapper>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.sku}
              name={product.name}
              description={product.description}
              imageURL={product.imageURL}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </ProductWrapper>
    </ProductMain>
  );
}
