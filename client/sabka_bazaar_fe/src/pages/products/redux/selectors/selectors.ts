import { ProductsList } from "models/products";
import { createSelector, Selector } from "reselect";
import { IState } from "store/interfaces";
import { IProductsError, IProductsLoading, IProductsState } from "../reducers/reducer";

const productsSelect = (state: IState): IProductsState => state.products;

const selectProducts: Selector<IState, ProductsList> = createSelector(productsSelect, (products) => products.getProductsData);

const selectFilteredProducts: Selector<IState, ProductsList["products"]> = createSelector(productsSelect, (products) => products.filteredProducts)

const selectLoading: Selector<IState, IProductsLoading> = createSelector(productsSelect, (products) => products.loading);

const selectError: Selector<IState, IProductsError> = createSelector(productsSelect, (products) => products.error);

export const ProductsSelectors = { selectProducts, selectFilteredProducts, selectLoading, selectError };
