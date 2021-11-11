import Header from "./Header";
import Footer from "./Footer";
import { useStore } from "../store/Store";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { login } from "../actions/userActions";
import { setCart } from "../actions/cartActions";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalStyles, InnerStyles } from "./styles/GlobalStyles";

export default function Page({ children }) {
  const [, dispatch] = useStore();
  const [cartItems, setCartItems] = useState([]);
  const queryClient = new QueryClient();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            userName: user.displayName,
            email: user.email,
            uid: user.uid,
          })
        );
        db.collection("cartItems")
          .where("user", "==", user.email)
          .get()
          .then((snapshot) => {
            setCartItems(
              snapshot.docs.map((doc) => {
                return doc.data();
              })
            );
          });
      } else {
        console.log("User Logged Out");
      }
    });
  }, []);
  useEffect(
    function () {
      dispatch(setCart(cartItems));
    },
    [cartItems]
  );
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
