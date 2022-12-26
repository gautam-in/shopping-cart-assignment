import { useEffect, useState } from "react";
import { getProducts, Product } from "../apis/product";
import ProductCard from "../components/product-card";

type Props = {};

export const Products = (props: Props) => {
  const [Products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const callAPI = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {}
    };
    callAPI();
  }, []);
  return (
    <ul
      style={{
        flexBasis: "80%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        rowGap: "10px",
      }}
    >
      {Products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  );
};
