import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CartContextProvider } from "../context/cartContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
