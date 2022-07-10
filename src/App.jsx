import React, { Component, lazy, Suspense } from "react";
import Server from "./server";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import icon from "./static/images/logo.png";
import toast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// COmponents
/* import Home from "./pages/Home";
import SignIn from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
 */
const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
// Creating new Server instance
const server = new Server("localhost", 8000);

class App extends Component {
  constructor(props) {
    super(props);

    // App initial state
    this.state = {
      products: {
        data: [],
        loaded: false,
        error: null,
      },
      categories: {
        data: [],
        loaded: false,
        error: null,
      },
      banners: {
        data: [],
        loaded: false,
        error: null,
      },
      cart: [],
    };
  }

  // Function to fetch server data;
  // Please don't edit unless you
  // know what you're doing.
  fetchServerData = () => {
    // Fetching Products
    server
      .fetchProducts()
      .then((res) => {
        this.setState((state) => {
          return {
            ...state,
            products: {
              ...state.products,
              data: res || [],
              loaded: true,
              error: null,
            },
          };
        });
      })
      .catch(() => {
        this.setState((state) => {
          return {
            ...state,
            products: {
              ...state.products,
              data: [],
              loaded: false,
              error: res,
            },
          };
        });
      });
    //   Fetching Categories
    server
      .fetchCategories()
      .then((res) => {
        this.setState((state) => {
          return {
            ...state,
            categories: {
              ...state.categories,
              loaded: true,
              data: res || [],
              error: null,
            },
          };
        });
      })
      .catch(() => {
        this.setState((state) => {
          return {
            ...state,
            categories: {
              ...state.categories,
              loaded: false,
              data: [],
              error: res,
            },
          };
        });
      });
    // Fetching Banners
    server
      .fetchBanners()
      .then((res) => {
        this.setState((state) => {
          return {
            ...state,
            banners: {
              ...state.banners,
              loaded: true,
              data: res || [],
              error: null,
            },
          };
        });
      })
      .catch(() => {
        this.setState((state) => {
          return {
            ...state,
            banners: {
              ...state.banners,
              loaded: false,
              data: [],
              error: res,
            },
          };
        });
      });
  };

  // AddToCart
  addToCart = ({ data }) => {
    server.addToCart(data.id).then((value) => {
      if (value.response === "Success") {
        // Storing cart data into cart variable;
        let cart = this.state.cart;

        // Checking if product is present or not
        // Finding cart data with current payload id, if present it will filter
        // the data, if not it will be undefined
        let findItem = cart.find((item) => item.id === data.id);
        // Getting filteredItem index, It will help to update
        // the current index, and prevent shifting the arrays
        let filteredItemIndex = cart.findIndex((item) => item.id === data.id);
        // Created a variable to check if there is any identical cart data.
        let isPresent = findItem !== undefined ? true : false;

        // Added condition to update the cart data
        // If present it will update the qty, If not
        // It will add the new data at the end of an array.
        if (isPresent) {
          // Updating the quantity
          let updatedData = { ...findItem, qty: findItem.qty + 1 };
          // Updating the previous data with the new data
          cart[filteredItemIndex] = updatedData;
          // Updating state
          this.setState({
            ...this.state,
            cart: cart,
          });
        } else {
          // Adding new data and updating the state
          this.setState((state) => {
            return {
              ...state,
              cart: cart.concat(data),
            };
          });
        }
        toast.success({ message: value.responseMessage });
      }
    });
  };
  // deleteQuantity
  deleteCartItem = ({ data }) => {
    // Storing cart data into cart variable;
    let cart = this.state.cart;

    // Checking if product is present or not
    // Finding cart data with current payload id, if present it will filter
    // the data, if not it will be undefined
    let findItem = cart.find((item) => item.id === data.id);
    // Getting filteredItem index, It will help to update
    // the current index, and prevent shifting the arrays
    let filteredItemIndex = cart.findIndex((item) => item.id === data.id);
    // Created a variable to check if there is any identical cart data.
    let isPresent = findItem !== undefined ? true : false;

    // Added condition to update the cart data
    // If present it will update the qty, If not
    // It will add the new data at the end of an array.
    if (isPresent) {
      if (findItem.qty > 1) {
        // Updating the quantity
        let updatedData = { ...findItem, qty: findItem.qty - 1 };
        // Updating the previous data with the new data
        cart[filteredItemIndex] = updatedData;
        // Updating state
        this.setState({
          ...this.state,
          cart: cart,
        });
      } else {
        let excludeItem = cart.filter((item) => item.id !== data.id);
        this.setState((state) => {
          return {
            ...state,
            cart: excludeItem,
          };
        });
      }
    }
  };

  // Lifecycle Methods
  componentDidMount() {
    // Fetching Server data
    this.fetchServerData();
    // End of Server data

    // Initializing required data into the localsystem
    // Initiating User's Data into the localStorage API
    // If User is present, then keep the current data,
    // If Not then initializing empty array or data
    localStorage.setItem(
      "users",
      JSON.stringify(
        JSON.parse(localStorage.getItem("users"))
          ? JSON.parse(localStorage.getItem("users"))
          : [],
        null,
        2
      )
    );
  }

  componentWillUnmount() {
    return false;
  }
  // end of lifecycle methods

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Sabka Bazaar</title>
          <meta
            name="description"
            content="Sabka Bazaar - Shopping on the go"
          />
          <link rel="icon" href={icon} />
        </Helmet>
        <Header cartCounter={this.state.cart.length} />
        <Cart
          data={this.state.cart}
          addToCart={this.addToCart}
          deleteCartItem={this.deleteCartItem}
        />
        <main>
          <Suspense fallback={"Loading..."}>
            {/* Router */}
            <Routes>
              <Route path="/">
                <Route
                  index
                  element={
                    <Home
                      banners={this.state.banners}
                      categories={this.state.categories}
                    />
                  }
                />
                <Route path="register" element={<Register />} />
                <Route path="signin" element={<SignIn />} />
                <Route
                  path="products"
                  element={
                    <Products
                      products={this.state.products}
                      categories={this.state.categories}
                      addToCart={this.addToCart}
                    />
                  }
                />
              </Route>
            </Routes>
            {/* Router */}
          </Suspense>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
