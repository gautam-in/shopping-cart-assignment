import React, { Component, Fragment } from "react";
import "../css/style.css";
import ProductCard from "./productCard";
import Footer from "./footer";
import axios from "axios";
import Header from "./header";
import Cart from "./cart";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      filteredProducts: [],
      cartToggle: false,
      productCount: 0,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/products").then((res) => {
      this.setState({
        products: res.data,
        filteredProducts: res.data,
      });
    });

    axios.get("http://localhost:8080/categories").then((res) => {
      this.setState({
        categories: res.data,
      });
    });
  }

  filterData = (e) => {
    const productName = e.target.innerHTML.replace("&amp;", "&");
    const selectedCategoryId = this.state.categories.filter(
      (el) => el.name === productName
    )[0].id;
    let filteredData;

    filteredData = this.state.products.filter(
      (el) => el.category == selectedCategoryId
    );

    if (
      productName == this.state.selectedCategory &&
      JSON.stringify(filteredData) ==
        JSON.stringify(this.state.filteredProducts)
    ) {
      filteredData = [...this.state.products];
    }

    this.setState({
      selectedCategory: productName,
      filteredProducts: filteredData,
    });
  };

  toggleCart = () => {
    this.setState((prevState) => ({
      cartToggle: !prevState.cartToggle,
    }));
  };

  addToCart = (data) => {
    axios
      .post("http://localhost:8080/addToCart", {
        productId: data.id,
        data: data,
      })
      .then(() => {
        axios.get("http://localhost:8080/addToCart").then((result) => {
          this.setState({
            productCount: result.data.length,
          });
          localStorage.setItem("productCount", result.data.length);
        });
      });
  };

  updateproductCount = (count) => {
    this.setState({
      productCount: count,
    });
    localStorage.setItem("productCount", count);
  };

  render() {
    const { filteredProducts, categories, cartToggle, products, productCount } =
      {
        ...this.state,
      };
    return (
      <Fragment>
        <Header toggleCart={this.toggleCart} productCount={productCount} />
        <div className="productsBody mainContainer">
          <aside onClick={(e) => this.filterData(e)}>
            {categories.length &&
              categories.map((data) => <div key={data.key}>{data.name}</div>)}
          </aside>
          <main>
            <section className="products">
              {filteredProducts.length &&
                filteredProducts.map((el) => (
                  <ProductCard cardData={el} addToCart={this.addToCart} />
                ))}
            </section>
          </main>
          {cartToggle && (
            <Cart
              toggleCart={this.toggleCart}
              products={products}
              updateproductCount={this.updateproductCount}
            />
          )}
        </div>
        <Footer />
      </Fragment>
    );
  }
}
export default Products;
