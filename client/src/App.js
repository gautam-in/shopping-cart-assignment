import { useContext } from "react";
import PLP from "./components/plp";
import { createGlobalStyle } from "styled-components";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import SigIn from "./components/signin";
import Register from "./components/register";
import Cart from "./components/cart";
import CartContextProvider from "./library/providers/cartProvider";
import CartContext from "./library/contexts/cartContext";

const GolbalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html{
    --black:#685656;
    --button-color:#D00255;
    --white:#FFF;
    --grey:#d8d5d5;
    --light-grey:#f4f0f0;
    --label-color: #898c95;
    --cartheader-background-color:#291212;
    box-sizing:border-box;
  } 
  body{
    padding:0;
    margin:0;
    font-size:14px;
    font-family: sans-serif;
    overflow: ${(props) => props.cartOpen};
    height:100%;
  }
  a{
    text-decoration:none;
    color:var(--black);
  }
  a:hover{
    text-decoration:underline;
  }
  button{
    cursor:pointer;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    body{
      font-size:12px;
    }
  }
  @media (max-width: 480px) {
   body{
    font-size:10px;
   }
  }
`;

function App() {
  const { open } = useContext(CartContext);
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={PLP} />
          <Route exact path="/signin" component={SigIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
        <GolbalStyles cartOpen={open ? "hidden" : "visible"} />
        <Header />
        <Cart />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
