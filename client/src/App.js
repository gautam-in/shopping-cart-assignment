import React, { useState, useEffect, useContext, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";

import PrivateRoute from "./routes/PrivateRoute";
import ModalComponent from "./components/Modal/Modal";
import CartContext from "./store/Cart/Context";
import CartItems from "./containers/CartItems/CartItems";
import LowestPriceTag from "./components/LowestPriceTag/LowestPriceTag";
import H3 from "./components/Typography/H3";
import P from "./components/Typography/P";
import { getCartQuantityAndTotalPrice } from "./utils";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/LoadingSpinner/LoadingSpinner";

const Login = React.lazy(() => import("./pages/Login/Login"));
const Register = React.lazy(() => import("./pages/Register/Register"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Products = React.lazy(() => import("./pages/Products/Products"));
const NotFound = React.lazy(()=> import("./pages/404/404"));

function App() {
  const cartContext = useContext(CartContext);

  const {
    cartModalState,
    closeCartModal,
    cartItems,
    addCartItem,
    removeCartItem,
    updateCartQuantityAndTotal,
  } = cartContext;
  const [modalState, setModalState] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(null);
  const [cartPrice, setCartPrice] = useState(null);

  useEffect(() => {
    setModalState(cartModalState);
  }, [cartModalState]);

  useEffect(() => {
    let { quantity, total } = getCartQuantityAndTotalPrice(cartItems);
    updateCartQuantityAndTotal({ quantity, total });
    setCartQuantity(quantity);
    setCartPrice(total);
    sessionStorage.setItem('cart',JSON.stringify(cartItems))
    setCartData(cartItems);
  }, [cartItems]);

  const handleModalClose = () => {
    closeCartModal();
  };

  const handleAddCartItem = (data) => {
    addCartItem(data);
  };

  const handleRemoveCartItem = (data) => {
    removeCartItem(data);
  };
  return (
    <>
      <Suspense fallback={<Spinner/>}>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/products" component={Products} />
          <Route path="*" component={NotFound} />

        </Switch>
        {isEmpty(cartData) ? (
          <ModalComponent
            modalState={modalState}
            handleModalClose={handleModalClose}
            noItems={isEmpty(cartData)}
          >
            <H3>No Items in your cart</H3>
            <P>Your favourite items are just a click away</P>
          </ModalComponent>
        ) : (
          <ModalComponent
            modalState={modalState}
            handleModalClose={handleModalClose}
            noItems={isEmpty(cartData)}
            cartPrice={cartPrice}
            cartQuantity={cartQuantity}
          >
            <CartItems
              data={cartData}
              handleAddCartItem={handleAddCartItem}
              handleRemoveCartItem={handleRemoveCartItem}
            />
            <LowestPriceTag />
          </ModalComponent>
        )}
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
