import React, { Component } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categiryList: [],
      productList: [],
      selectedCategoryId: window.location.hash.substring(1),
      filteredProducts: [],
      allSelectedProducts: [],
      noDataText: "",
      userAuth: true,
    };
  }

  componentDidMount() {
    this.categiriesListData();
    this.productListData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.productList !== prevState.productList ||
      this.state.selectedCategoryId !== prevState.selectedCategoryId
    ) {
      this.getData();
    }
  }

  allSelectedProducts = (comingState, sameItem) => {
    this.props.allSelectedProducts(comingState, sameItem);
    // if (sameItem === "sameItem") {
    //   let newList = this.state.allSelectedProducts.filter(
    //     (obj) => obj.id !== comingState.id
    //   );
    //   newList.push(comingState);
    //   this.setState({
    //     allSelectedProducts: newList,
    //   });
    // } else {
    //   this.setState({
    //     allSelectedProducts: [...this.state.allSelectedProducts, comingState],
    //   });
    // }
  };

  handleCategoryChange = (category) => {
    this.setState({
      selectedCategoryId: category,
    });
    window.location.hash = category;
    this.getData();
  };

  getData = () => {
    const filteredProducts =
      this.state.selectedCategoryId && this.state.productList
        ? this.state.productList.filter(
            (product) => product.category == this.state.selectedCategoryId
          )
        : this.state.productList;
    this.setState({
      filteredProducts: filteredProducts,
    });
  };

  categiriesListData = () => {
    axios
      .get(`http://localhost:5000/categories`)
      .then((res) => {
        if (res && res.status === 200) {
          const response = res.data;
          this.setState({ categiryList: response });
        } else {
          this.setState({
            categiryList: [],
          });
        }
      })
      .catch((err) => {
        this.setState({
          noDataText: "Something went wrong Please Try Again Later!",
        });
      });
  };

  productListData = () => {
    axios
      .get(`http://localhost:5000/products`)
      .then((res) => {
        if (res && res.status === 200) {
          const response = res.data;
          this.setState({ productList: response, filteredProducts: res.data });
        } else {
          this.setState({
            productList: [],
          });
        }
      })
      .catch((err) => {
        this.setState({
          noDataText: "Something went wrong Please Try Again Later!",
        });
      });
  };

  checkingUserAuth = () => {
    if (sessionStorage.getItem("currentUser")) {
      this.setState({
        userAuth: true,
      });
      return true;
    } else {
      this.setState({
        userAuth: false,
      });
      return false;
    }
  };

  render() {
    return (
      <>
        {this.state.userAuth ? (
          !isEmpty(this.state.productList) ? (
            <section className="products">
              <ul className="product-categories">
                {this.state.categiryList &&
                  this.state.categiryList.map((category) => (
                    <li
                      className={
                        this.state.selectedCategoryId == category.id
                          ? "category-active"
                          : ""
                      }
                      key={category.id}
                      onClick={() => this.handleCategoryChange(category.id)}
                    >
                      {category.name}
                    </li>
                  ))}
              </ul>
              <select
                value={this.state.selectedCategoryId}
                onChange={(e) => this.handleCategoryChange(e.target.value)}
                className="category-dropdown"
              >
                <option value="" disabled>
                  ---Select Category---
                </option>
                {this.state.categiryList &&
                  this.state.categiryList.map((_) => (
                    <option value={_.id} key={_.id}>
                      {_.name}
                    </option>
                  ))}
              </select>
              <article className="product-list">
                {this.state.filteredProducts.length > 0 ? (
                  this.state.productList &&
                  this.state.filteredProducts.map((prod) => (
                    <ProductDetails
                      product={prod}
                      key={prod.id}
                      allSelectedProducts={this.allSelectedProducts}
                      mainCartItems={this.props.mainCartItems}
                      checkingUserAuth={this.checkingUserAuth}
                    />
                  ))
                ) : (
                  <h2
                    className="nodataTextProducts"
                    style={{
                      textAlign: "center",
                      height: "70vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Data Not Avaliable Please Try Again Later!
                  </h2>
                )}
              </article>
            </section>
          ) : (
            <h2
              style={{
                textAlign: "center",
                height: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {this.state.noDataText
                ? this.state.noDataText
                : "Data Not Avaliable"}
            </h2>
          )
        ) : (
          <article className="doLogin">
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
                flexDirection: "column",
              }}
            >
              <Link to="/signin">Please Click here to Login</Link>
              <h4>
                <Link
                  to="/signup"
                  style={{
                    color: "red",
                    letterSpacing: "1px",
                  }}
                >
                  If you don't have an account please create!
                </Link>
              </h4>
            </h2>
          </article>
        )}
      </>
    );
  }
}

export default Products;
