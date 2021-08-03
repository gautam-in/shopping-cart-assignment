import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { useStore } from "../store/Store";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { login } from "../actions/userActions";
import { setCart } from "../actions/cartActions";

const GlobalStyles = createGlobalStyle`
  :root {
      --maxWidth: 1170px;
      --fontFamily: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      --colorPrimary: #BF2957;
      --colorBlue: #50DAE4;
      --swiper-pagination-color: #555;
      --swiper-theme-color: var(--swiper-pagination-color);
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  * {
  box-sizing: border-box;
  }

  html,
  body {
  padding: 0;
  margin: 0;
  font-family: var(--fontFamily)
  }

  a {
  color: inherit;
  text-decoration: none;
  }

`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 1rem;
`;

export default function Page({ children }) {
  const [, dispatch] = useStore();
  const [cartItems, setCartItems] = useState([]);
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
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </div>
  );
}
