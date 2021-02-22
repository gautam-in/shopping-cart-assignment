import React, { Component } from "react";
import { connect } from "react-redux";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import Products from "../../components/Products/Products";
import classes from "./ProductPage.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import axios from "../../axios-orders";
class ProductPage extends Component {
  componentDidMount() {
    const {
      onFetchCategories,
      categoryId,
      onFetchProducts,
      onSelectCategory,
    } = this.props;
    if (categoryId === "") {
      onSelectCategory("all", "All Categories");
      onFetchProducts("all");
    } else {
      onFetchProducts(categoryId);
    }
    onFetchCategories();
  }
  clickHandleFilter = (filterId, filterValue) => {
    const { categoryId, onSelectCategory, onFilterProducts } = this.props;
    if (categoryId === filterId || filterId === "all") {
      onSelectCategory("all", "All Categories");
      onFilterProducts("all");
    } else {
      onSelectCategory(filterId, filterValue);
      onFilterProducts(filterId);
    }
  };
  render() {
    const {
      categories,
      categoryId,
      categoryName,
      loading,
      filteredProduct,
      onAddToCart,
    } = this.props;
    console.log(filteredProduct, categories);
    let productPage = <Spinner />;
    if (!loading) {
      productPage = [];
      let filter =
        categories && categories.length >= 0 ? (
          <SideNavigation
            key={"SideNavigation"}
            categories={categories}
            filerData={categoryName}
            filterSelect={categoryId}
            clickHandleFilter={this.clickHandleFilter}
          />
        ) : null;
      let product =
        filteredProduct && filteredProduct.length >= 0 ? (
          <Products key={"products"} products={filteredProduct} addToCartHandler={onAddToCart} />
        ) : null;
      productPage.push(filter);
      productPage.push(product);
    }
    return <div className={classes.ProductPageWrapper}>{productPage}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.home.categories,
    categoryId: state.home.categoryId,
    categoryName: state.home.categoryName,
    filteredProduct: state.product.filteredProduct,
    products: state.product.products,
    loading: state.product.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCategories: () => dispatch(actions.fetchCategories()),
    onFetchProducts: (id) => dispatch(actions.fetchProducts(id)),
    onSelectCategory: (id, name) => dispatch(actions.selectCategory(id, name)),
    onFilterProducts: (id) => dispatch(actions.filterProducts(id)),
    onAddToCart: (product, type) => dispatch(actions.addToCart(product, type)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ProductPage, axios));
