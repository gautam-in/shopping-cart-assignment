import Header from "@/src/components/layout/Header";
import Head from "next/head";
import dynamic from "next/dynamic";

const Cart = dynamic(() => import("@/src/components/cart/Cart"), {
  ssr: false,
});

export default function CartPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sabka Bazaar | Cart</title>
      </Head>
      <div>
        <Header />
        <main>
          <Cart />
        </main>
      </div>
    </>
  );
}
