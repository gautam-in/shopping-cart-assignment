import React, { Component } from "react";
import CategoriesBar from "./CategoriesBar";
import ProductCard from "./ProductCard";
import { axiosPost } from "../../services/utils";
import "./ProductListing.scss";
import Toast from "../Toast";
import cartServices from "../../services/cartServices";
import { CartContext } from "../../services/cartContext";

class ProductListing extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.state = {
      addToCartToast: false,
    };
  }

  handleClick = async (product) => {
    try {
      cartServices.addToCart({ ...product });
      const updateCart = this.context;
      updateCart();
      await axiosPost("addToCartToast", { productId: product.id });
      this.setState((prevState) => ({ addToCartToast: true }));
    } catch (e) {
      this.setState((prevState) => ({ addToCartToast: true }));
    }
  };

  closeToast = () => {
    this.setState({
      addToCartToast: false,
    });
  };

  render() {
    const { products, categories, categoryId } = this.props;
    let filteredProducts;
    if (categoryId) {
      filteredProducts = products.filter(
        (product) => product.category === categoryId
      );
    } else {
      filteredProducts = products;
    }

    return (
      <section className="product-listing">
        <div className="category-filter">
          <CategoriesBar
            categoryId={categoryId}
            categories={categories}
            setSearchParam={this.props.setSearchParam}
          />
        </div>
        <div className="products">
          {filteredProducts.map((product) => (
            <ProductCard
              handleClick={this.handleClick}
              key={product.id}
              product={product}
            />
          ))}
        </div>
        {this.state.addToCartToast && (
          <Toast
            toastType="success"
            textMessage="Successfully added product to cart!"
            closeToast={this.closeToast}
          />
        )}
      </section>
    );
  }
}

export default ProductListing;
