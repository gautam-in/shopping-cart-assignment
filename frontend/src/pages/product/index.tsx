import ProductCard from "@/components/ProductCard";
import { GetServerSideProps } from "next";
import React from "react";
import { Product } from "../api/product";
import styles from "./product.module.scss";

const ProductPage = ({ data }: { data: Product[] }) => {
  return (
    <section className={styles["product-section"]}>
      <ul className={styles["product-section--list"]}>
        {data?.map(({ name, description, price, id, imageURL }) => (
          <li key={id}>
            <ProductCard
              title={name}
              description={description}
              productImg={imageURL}
              price={price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: Product[];
}> = async (context) => {
  const res = await fetch("http://localhost:3000/api/product");
  const data: Product[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ProductPage;
