import Head from "next/head";
import Products from "../components/products/Products";
export default function products() {
  return (
    <div>
      <Head>
        <title>Products | Sabka Bazaar</title>
      </Head>
      <Products />
    </div>
  );
}
