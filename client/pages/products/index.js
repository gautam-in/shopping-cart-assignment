import ProductsFilter from "@/src/components/products/ProductsFilter";
import ProductsList from "@/src/components/products/ProductsList";
import queryData from "@/src/utils/queryData";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import styles from "@/styles/Products.module.scss";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import { useState } from "react";

export async function getServerSideProps({ query }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products"], queryData);
  await queryClient.prefetchQuery(["categories"], queryData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      selectedCategory: query.category || null,
    },
  };
}

export default function Products({ selectedCategory }) {
  const [selectedFilterCategory, setSelectedFilterCategory] = useState(null);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sabka Bazaar | Products</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <nav className={styles.filter}>
          <ProductsFilter
            selectedCategory={selectedCategory}
            selectedFilterCategory={selectedFilterCategory}
            setSelectedFilterCategory={setSelectedFilterCategory}
          />
        </nav>
        <main className={styles.mainContent}>
          <ProductsList selectedFilterCategory={selectedFilterCategory} />
        </main>
        <Footer />
      </div>
    </>
  );
}
