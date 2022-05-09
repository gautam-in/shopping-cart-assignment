import { useState, useEffect, useContext } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { isEmpty } from 'lodash';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import PrivateRoute from "./routes/PrivateRoute";
import ModalComponent from "./components/Modal/Modal";
import CartContext from "./store/Cart/Context";
import CartItems from "./containers/CartItems/CartItems";
import LowestPriceTag from "./components/LowestPriceTag/LowestPriceTag";
import H3 from "./components/Typography/H3";
import P from "./components/Typography/P";
import { getCartQuantityAndTotalPrice } from './utils';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  const cartContext = useContext(CartContext);

  const { cartModalState, closeCartModal, cartItems, addCartItem, removeCartItem, updateCartQuantityAndTotal } = cartContext;
  const [modalState, setModalState] = useState(false)
  const [cartData, setCartData] = useState([])
  const [cartQuantity, setCartQuantity] = useState(null)
  const [cartPrice, setCartPrice] = useState(null)

  useEffect(() => {
    setModalState(cartModalState)
  }, [cartModalState])

  useEffect(() => {
      let { quantity, total } = getCartQuantityAndTotalPrice(cartItems)
      updateCartQuantityAndTotal({quantity,total})
      setCartQuantity(quantity)
      setCartPrice(total)
      sessionStorage.setItem('cartItems',JSON.stringify(cartItems))
      setCartData(cartItems)
  }, [cartItems])

  const handleModalClose = () => {
    closeCartModal()
  }

  const handleAddCartItem = (data) => {
    addCartItem(data)
  }

  const handleRemoveCartItem = (data) => {
    removeCartItem(data)
  }
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/products" component={Products} />
      </Switch>
      {isEmpty(cartData) ?
        (
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
            <CartItems data={cartData} handleAddCartItem={handleAddCartItem} handleRemoveCartItem={handleRemoveCartItem} />
            <LowestPriceTag />
          </ModalComponent>
        )}
      <Footer/>
    </>
  );
}

export default App;
