import ProductsActionTypes from "./products.types";

export function fetchProductsDataSuccess(productsData) {
    return {
        type: ProductsActionTypes.Fetch_PRODUCTS_LIST_SUCCESS,
        payload: productsData
    };
}

export const fetchProductsDataFailure = (errorMessage) =>({
    
        type: ProductsActionTypes.Fetch_PRODUCTS_LIST_FAILURE,
        payload: errorMessage
    }
)

export function fetchProductsData() {
    return {
        type: ProductsActionTypes.Fetch_PRODUCTS_LIST
    }
}