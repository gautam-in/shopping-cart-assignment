import "../styles/globals.css";
import Page from "../components/Page";
import CartContext from "../components/context/CartContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [numItems, setNumItems] = useState(0);
  const value = { cart, setCart, numItems, setNumItems };
  return (
    <CartContext.Provider value={value}>
      <Page>
        <Component {...pageProps} />;
      </Page>
    </CartContext.Provider>
  );
}

export default MyApp;
