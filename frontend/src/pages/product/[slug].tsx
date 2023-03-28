import ProductCard from "@/components/ProductCard";
import { GetServerSideProps } from "next";
import React from "react";
import { Product } from "../api/product";
import styles from "@/styles/pages/Product.module.scss";
import SideNav from "@/components/SideNav";
import { Category } from "../api/categories";

const ProductPage = ({
  categoriesData,
  productsData,
}: {
  categoriesData: Category[];
  productsData: Product[];
}) => {
  const sideNavData = categoriesData?.map(({ id, name }) => ({
    id,
    name,
  }));
  return (
    <section className={styles["product-section"]}>
      <SideNav data={sideNavData} />
      <ul className={styles["product-section--list"]}>
        {productsData?.map(({ name, description, price, id, imageURL }) => (
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
  categoriesData: Category[];
  productsData: Product[];
}> = async (context) => {
  const resProductsPromise = fetch(
    `http://localhost:3000/api/product?id=${context?.params?.slug}`
  ).then((res) => res.json());
  const resCategoriesPromise = fetch(
    "http://localhost:3000/api/categories"
  ).then((res) => res.json());
  const [categoriesData, productsData] = await Promise.all([
    resCategoriesPromise,
    resProductsPromise,
  ]);

  return {
    props: {
      categoriesData,
      productsData,
    },
  };
};

export default ProductPage;
