import React, { Component } from "react";
import "./styles/app.scss";
import Signin from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Cart from "./components/Cart";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainCartItems: [],
    };
  }

  allSelectedProducts = (comingState, sameItem) => {
    if (sameItem === "sameItem") {
      let newList = this.state.mainCartItems.filter(
        (obj) => obj.id !== comingState.id
      );
      newList.push(comingState);
      this.setState({
        mainCartItems: newList,
      });
    } else {
      this.setState({
        mainCartItems: [...this.state.mainCartItems, comingState],
      });
    }
  };

  updateCartItemCount = (type, prodId) => {
    if (type === "increase") {
      let data = [...this.state.mainCartItems];
      let currentItem = data.find((obj) => obj.id === prodId);
      if (currentItem.stock > 0) {
        currentItem.quantity = currentItem.quantity + 1;
        currentItem.totalPrice = currentItem.totalPrice + currentItem.unitPrice;
        currentItem.stock = currentItem.stock - 1;

        let newList = data.filter((obj) => obj.id !== currentItem.id);
        newList.push(currentItem);
        this.setState({
          mainCartItems: newList,
        });
      } else {
        toast.warn("Currently Stock is not Avaliable!");
      }
    } else {
      let data = [...this.state.mainCartItems];
      let currentItem = data.find((obj) => obj.id === prodId);
      currentItem.quantity = currentItem.quantity - 1;
      currentItem.totalPrice = currentItem.totalPrice - currentItem.unitPrice;
      currentItem.stock = currentItem.stock + 1;

      let newList = data.filter((obj) => obj.id !== currentItem.id);
      currentItem.quantity > 0 && newList.push(currentItem);
      if (currentItem.quantity <= 0) {
        toast.warn(
          "Item Removed, If you want to add item click on Products/Start Shopping!"
        );
      }
      this.setState({
        mainCartItems: newList,
      });
    }
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navbar mainCartItems={this.state.mainCartItems} />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Register} />
            <Route path="/home" component={Home} />
            <Route
              path="/products"
              render={(props) => (
                <Products
                  {...props}
                  allSelectedProducts={this.allSelectedProducts}
                  mainCartItems={this.state.mainCartItems}
                />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <Cart
                  {...props}
                  mainCartItems={this.state.mainCartItems}
                  updateCartItemCount={this.updateCartItemCount}
                />
              )}
            />
            {/* <Route path="/cart" component={Cart} /> */}
          </Switch>
          <Footer />
        </BrowserRouter>

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          transition={Slide}
        />
      </div>
    );
  }
}

export default App;
