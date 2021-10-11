import Sidebar from "components/molecules/sidebar/sidebar";
import ProductsComponent from "components/organisms/products/productsComponent";
import { HomeActions } from "modules/home/redux/actions/actions";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { IState } from "store/interfaces";
import { ProductsActions } from "./redux/actions/actions";

const Products = (): React.ReactElement => {
  let history: any = useHistory();
  const dispatch = useDispatch();
  const getProductsData = useSelector((state: IState) => state.products.getProductsData);
  const getCategoriesData = useSelector((state: IState) => state.home.getCategoriesData);
  const filteredProducts = useSelector((state: IState) => state.products.filteredProducts);

  const filterProducts = useCallback(
    (id: string) => {
      let filteredProducts = getProductsData.products.filter((product) => {
        if (product.category === id) return product;
        return 0;
      });
      dispatch(ProductsActions.getFilteredProducts(filteredProducts));
    },
    [getProductsData, dispatch]
  );

  useEffect(() => {
    if (getCategoriesData.categories.length === 0) dispatch(HomeActions.getCategories());
  }, [getCategoriesData, dispatch]);

  useEffect(() => {
    if (getProductsData.products.length === 0) dispatch(ProductsActions.getProducts());
  }, [getProductsData, dispatch]);

  useEffect(() => {
    if (history.location.state && history.location.state["id"].length > 0) {
      filterProducts(history.location.state["id"]);
    }
  }, [history.location.state, filterProducts]);

  return (
    <div className="products-container" id="products">
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
        <ProductsComponent productsList={filteredProducts.length > 0 ? filteredProducts : getProductsData.products} />
      </div>
    </div>
  );
};

export default Products;
