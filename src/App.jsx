import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Server
import Server from "./server";
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

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
