import React, { useState, createContext } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Helper/Header/index.js";
import Home from "./Component/Home/index.js";
import Footer from "./Helper/Footer/index.js";
import Products from "./Component/Product/index.js";
import Register from "./Component/Register/index.js";
import SignIn from "./Component/Login/index.js";
import Cart from "./Component/Cart/index.js";
import AuthContext from "./Auth.jsx";
import store from "./store.js";
import NotFound from "./Helper/NotFound/index";
import "./App.css";
import ErrorBoundary from "./Helper/ErrorBoundary/index.js";


// export const AddToCartContext = createContext();

// export default (props) => {
//   const [cart, setCart] = useState([]);
//   // let cart = [];
//   // const setCart = (data) => {
//   //   // setCart(data);
//   //   cart = data;
//   // };

//   useEffect(() => {
//     console.log("cart changed", cart);
//   }, [cart]);
//   console.log("cart changed", cart);

//   return (
//     <AddToCartContext.Provider value={{ cart, setCart }}>
//       {props.children}
//     </AddToCartContext.Provider>
//   );
// };
const App = () => {
  // var initialState = {
  //   bool:false
  //     };
  // const [valueCart, setValueCart] = useState(initialState)
  const [userAuthentication, setUserAuthentication] = useState(
    localStorage.getItem("status")
  );

  const contextVal = {
    // valueCart,
    userAuthentication,
    toggleUserAuthentication: () => {
      setUserAuthentication(
        userAuthentication === "logged-in" ? "" : "logged-in"
      );
    },
  };
// const drawerCart =(value)=>{
//   console.log(value,)
// setValueCart({...valueCart,bool:value})
// }
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AuthContext.Provider value={contextVal}>
        {/* <AddToCartContext.Provider value={valueCart} openCart={drawerCart}> */}
          <BrowserRouter>
            <Header />
            <main>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route path="/login" component={SignIn} />
                <Route path="/sign-up" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/products" component={Products} />
                {/* <Route path="/cart" component={Cart} /> */}
                <Route path="*" exact={true} component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </BrowserRouter>
          {/* </AddToCartContext.Provider> */}
        </AuthContext.Provider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
