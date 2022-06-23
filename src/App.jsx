import React, { Component } from "react";
import Server from "./server";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import icon from "./static/images/logo.png";

// Server
const server = new Server("localhost", 8000);

class App extends Component {
  constructor(props) {
    super(props);

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

  componentDidMount() {
    // Fetching Products
    server
      .fetchProducts()
      .then((res) => {
        this.setState((state) => {
          return {
            ...state,
            products: {
              ...state.products,
              data: res,
              loaded: true,
              error: null,
            },
          };
        });
      })
      .catch((err) => {
        this.setState((state) => {
          return {
            ...state,
            products: {
              ...state.products,
              data: [],
              loaded: false,
              error: err.message,
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
              data: res,
              error: null,
            },
          };
        });
      })
      .catch((err) => {
        this.setState((state) => {
          return {
            ...state,
            categories: {
              ...state.categories,
              loaded: false,
              data: [],
              error: err.message,
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
              data: res,
              error: null,
            },
          };
        });
      })
      .catch((err) => {
        this.setState((state) => {
          return {
            ...state,
            banners: {
              ...state.banners,
              loaded: false,
              data: [],
              error: err.message,
            },
          };
        });
      });
  }

  componentWillUnmount() {
    return false;
  }

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
        <Header />

        {/* Router */}
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
        {/* Router */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
