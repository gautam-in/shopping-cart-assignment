/* eslint-disable react/display-name */
import axios from "axios";
import { useQuery } from "react-query";
import LoadError from "../LoadError";
import ProductCard from "./ProductCard";
import ProductSidebar from "./ProductSidebar";
import { ProductMain, ProductWrapper } from "./productStyles";

const baseUrl = "http://localhost:3000/api/products";

const getProducts = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
}

export default function Products() {
  const {isLoading, isError, isSuccess, data} = useQuery('getProducts', getProducts)
  return (
    <ProductMain>
      <ProductSidebar />
      <ProductWrapper>
        {isLoading && <p>Getting the Products...</p>}
        {isError && <LoadError />}
        {isSuccess && data.map((product) => {
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
