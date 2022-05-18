import { createSelector } from "reselect";

const selectProductReducer = (state) => state.product;
const selectCategoryReducer = (state) => state.category;

export const selectProducts = createSelector(
    [selectProductReducer,selectCategoryReducer],
    (productsSlice) => productsSlice.productItems
)


export const selectProductData = createSelector(
    [selectProducts,selectCategoryReducer],
    (productItems,categorySlice) => {
        const productData = categorySlice.selectedCategory == "All" ?  productItems : productItems.filter(productItem => productItem.category == categorySlice.selectedCategory);
        console.log(productData);
        return productData;
    }
)