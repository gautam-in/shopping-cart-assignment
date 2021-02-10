import React, { useEffect, useState } from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleModalToggle,
  buyNowItems,
  removeCartItem,
} from "./redux/actions/actions";
import "./App.scss";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import Home from "./components/home/Home";
import ProductsPage from "./components/productsPage/ProductsPage";
import Modal from "./components/common/modal/Modal";
import MiniCard from "./components/common/miniCard/MiniCard";

const App = (props) => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const [filteredCartItems, setFilteredCartItems] = useState([]);
  const modalToggle = useSelector((state) => state.modalToggle);
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    modalToggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [modalToggle]);

  const calcTotal = (array, param) => {
    let result = array.reduce(function (cnt, o) {
      return cnt + o[param];
    }, 0);
    return result;
  };

  const uniqueBy = (a, param) => {
    return a.filter(function (item, pos, array) {
      return (
        array
          .map(function (mapItem) {
            return mapItem[param];
          })
          .indexOf(item[param]) === pos
      );
    });
  };

  useEffect(() => {
    setFilteredCartItems(uniqueBy(cartItems, "id"));
    setTotalAmount(calcTotal(cartItems, "price"));
  }, [cartItems]);

  const modalHandler = (e) => {
    e.preventDefault();
    dispatch(handleModalToggle());
  };

  const decrementHandler = (id) => {
    dispatch(removeCartItem(id));
  };

  const incrementHandler = (id, name, price, src) => {
    let itemsObj = {
      id,
      name,
      price,
      src,
    };
    dispatch(buyNowItems(itemsObj));
  };

  return (
    <Router>
      <Header
        handleCartClick={modalHandler}
        totalCartItems={cartItems.length}
      />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/productsPage" component={ProductsPage} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
      <aside>
        <Modal
          displayModal={modalToggle}
          closeModal={modalHandler}
          totalPrice={totalAmount}
          totalItems={cartItems.length}
        >
          {cartItems.length > 0 ? (
            <>
              {filteredCartItems.map((item, index) => (
                <MiniCard
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  src={item.src}
                  price={item.price}
                  decrementHandler={() => decrementHandler(item.id)}
                  incrementHandler={() =>
                    incrementHandler(item.id, item.name, item.price, item.src)
                  }
                />
              ))}
              <div className="lowestPriceCard">
                <img src="/images/lowest-price.png" alt="lowest-price" />
                <span>You won't find it cheaper anywhere</span>
              </div>
            </>
          ) : (
            <div className="noItems">
              <div className="title">No items in the cart</div>
              <div>Your favourite items are just a click away</div>
            </div>
          )}
        </Modal>
      </aside>
      <Footer />
    </Router>
  );
};

export default App;
