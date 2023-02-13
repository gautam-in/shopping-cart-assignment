import Cart from "@/src/components/cart/Cart";
import Header from "@/src/components/layout/Header";
import Head from "next/head";

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
