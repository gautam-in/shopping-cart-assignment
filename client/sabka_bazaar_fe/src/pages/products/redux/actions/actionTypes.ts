import { ActionHelper } from "utils/actionHelper";

const productsPrefix = "products";

const PRODUCTS = {
  GET: ActionHelper.actionTypesCreator(productsPrefix, "GET_PRODUCTS")
};

const FILTEREDPRODUCTS = "filtered_products";

export { PRODUCTS, FILTEREDPRODUCTS };
