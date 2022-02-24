import {createSelector} from 'reselect';

const displayProducts = state => state.products;

export const displayProductsData = createSelector(
    [displayProducts],
    (product) => product.productsData
)

export const selectProduct = productUrlParam => createSelector(
    [displayProductsData],
    products => products.find(product => {
        return product.category === productUrlParam
    })
)