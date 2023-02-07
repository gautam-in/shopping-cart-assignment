import Banners from "@/src/components/banners/Banners";
import Categories from "@/src/components/categories/Categories";
import Header from "@/src/components/layout/Header";
import queryData from "@/src/utils/queryData";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import styles from "@/styles/Home.module.scss";
import Footer from "@/src/components/layout/Footer";

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["banners"], queryData);
  await queryClient.prefetchQuery(["categories"], queryData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sabka Bazaar | Home</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.mainContent}>
          <Banners />
          <Categories />
        </main>
        <Footer />
      </div>
    </>
  );
}
