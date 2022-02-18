import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import Sidebar from "../../components/sidebarMenu/sidebar.component";
import "./products-page.scss";
import DropdownMenu from "../../components/dropdown-bar/dropdown-menu.component";
import { config } from "../../App";
const axios = require("axios");

let originalProductData = [];
class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
      categories: [],
    };
  }

  filterProducts = async (categoryId) => {
    let products = [...originalProductData];
    products = products.filter((product) => product.category === categoryId);
    this.setState({ products: products });
  };

  
  getProducts = async () => {
    return axios({
      method: "GET",
      url: `${config.endpoint+config.products}`,
      headers: { "content-type": "application/json" },
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  getCategories = async () => {
    return axios({
      method: "GET",
      url: "http://localhost:5000/categories",
      headers: { "content-type": "application/json" },
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  };

 
  async componentDidMount() {
    const products = await this.getProducts();
    originalProductData = products;
    const categories = await this.getCategories();
    this.setState({ categories });

    this.setState({ products: products });
  }
  
  render() {
    const products = this.state.products;
    const categories = this.state.categories;

    return (
      <div className="product-page">
        <Sidebar
          filterProducts={this.filterProducts}
          className="sidebar"
          categories={categories}
        />
        <DropdownMenu
          filterProducts={this.filterProducts}
          categories={categories}
          className="drop-down-menu"
        />

        <div className="collection-preview">
          {products.map((product) => (
            <CollectionItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsPage;
