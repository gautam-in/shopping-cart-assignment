import Sidebar from "components/molecules/sidebar/sidebar";
import { CategoryList } from "models/home";
import { ProductsList } from "models/products";
import { CartActions } from "pages/cart/redux/actions/actions";
import { HomeActions } from "pages/home/redux/actions/actions";
import { HomeSelectors } from "pages/home/redux/selectors/selectors";
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { IState } from "store/interfaces";
import "./products.scss";
import ProductsComponent from "../../components/organisms/products/productsComponent";
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

  // useEffect(() => {
  //   let userStatus = LocalStorage.getStorage("status");
  //   userStatus !== "logged-in" && history.push(allRoutes.LOGIN);
  // }, [LocalStorage.getStorage("status")]);

  useEffect(() => {
    if (getCategoriesData.categories.length === 0) getCategories();
  }, [getCategoriesData, getCategories]);

  useEffect(() => {
    if (getProductsData.products.length === 0) getProducts();
  }, [getProductsData, getProducts]);

  const filterProducts = useCallback(
    (id: string) => {
      let filteredProducts = getProductsData.products.filter((product) => {
        if (product.category === id) return product;
        return 0;
      });
      getFilteredProducts(filteredProducts);
    },
    [getProductsData, getFilteredProducts]
  );

  useEffect(() => {
    if (history.location.state && history.location.state["id"].length > 0) {
      filterProducts(history.location.state["id"]);
    }
  }, [history.location.state, filterProducts]);

  return (
    <section className="section-products" id="products">
      <select onChange={(e) => filterProducts(e.target.value)} className="custom-menu">
        {getCategoriesData.categories &&
          getCategoriesData.categories.map((element, index) => {
            return (
              <option value={element.id} key={index}>
                {element.name}
              </option>
            );
          })}
      </select>
      <div className="sidebar-menu">
        <Sidebar menuOptions={getCategoriesData.categories} filterOptions={(id: string) => filterProducts(id)} />
      </div>
      <div className="products-component">
        <ProductsComponent productsList={filteredProducts.length > 0 ? filteredProducts : getProductsData.products} addToCart={addToCart} />
      </div>
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
