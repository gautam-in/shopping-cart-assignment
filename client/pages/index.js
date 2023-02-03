import Banners from "@/src/components/banners/Banners";
import Categories from "@/src/components/categories/Categories";
import queryData from "@/src/utils/queryData";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";

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
        <title>Sabka Bazaar | Home</title>
      </Head>
      <main>
        <Banners />
        <Categories />
      </main>
    </>
  );
}
