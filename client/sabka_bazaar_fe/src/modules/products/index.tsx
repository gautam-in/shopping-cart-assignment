import Sidebar from "components/sidebar/sidebar";
import { CategoryList } from "models/home";
import { ProductsList } from "models/products";
import { CartActions } from "modules/cart/redux/actions/actions";
import { HomeActions } from "modules/home/redux/actions/actions";
import { HomeSelectors } from "modules/home/redux/selectors/selectors";
import { allRoutes } from "navigation/allRouteNames";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { LocalStorage } from "services/storage";
import { IState } from "store/interfaces";
import "./products.scss";
import ProductsComponent from "./productsComponent";
import { ProductsActions } from "./redux/actions/actions";
import { ProductsSelectors } from "./redux/selectors/selectors";

interface IProps {
  getCategories: Function;
  getProducts: Function;
  getFilteredProducts: Function;
  addToCart: Function;
  getCategoriesData: CategoryList;
  getProductsData: ProductsList;
  filteredProducts: ProductsList["products"];
}

const Index = (props: IProps): React.ReactElement => {
  let history = useHistory();
  const { getCategories, getCategoriesData, getProducts, getProductsData, getFilteredProducts, filteredProducts, addToCart } = props;

  useEffect(() => {
    let userStatus = LocalStorage.getStorage("status");
    userStatus !== "logged-in" && history.push(allRoutes.LOGIN);
  }, [LocalStorage.getStorage("status")]);

  useEffect(() => {
    if (getCategoriesData.categories.length === 0) getCategories();
  }, []);

  useEffect(() => {
    if (getProductsData.products.length === 0) getProducts();
  }, []);

  const filterProducts = (id: string) => {
    let filteredProducts = getProductsData.products.filter((product) => {
      if (product.category === id) return product;
      // return 0;
    });
    getFilteredProducts(filteredProducts);
  };

  return (
    <section className="section-products" id="products">
      {/* <Row> */}
      {/* <Column md={4} lg={4} xs={4} sm={4} className="products-box"> */}
      <div className="sidebar-menu">
        <Sidebar menuOptions={getCategoriesData.categories} filterOptions={(id: string) => filterProducts(id)} />
      </div>
      {/* </Column> */}
      {/* <Column md={8} lg={8} xs={8} sm={8} className="products-box"> */}
      <div className="products-component">
        <ProductsComponent productsList={filteredProducts.length > 0 ? filteredProducts : getProductsData.products} addToCart={addToCart} />
      </div>
      {/* </Column> */}
      {/* </Row> */}
    </section>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    getCategoriesData: HomeSelectors.selectCategories(state),
    getProductsData: ProductsSelectors.selectProducts(state),
    filteredProducts: ProductsSelectors.selectFilteredProducts(state),
    loading: HomeSelectors.selectLoading(state),
    productsLoading: ProductsSelectors.selectLoading(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCategories: () => dispatch(HomeActions.getCategories()),
    getProducts: () => dispatch(ProductsActions.getProducts()),
    getFilteredProducts: (filteredProducts) => dispatch(ProductsActions.getFilteredProducts(filteredProducts)),
    addToCart: (product) => dispatch(CartActions.addToCart(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
