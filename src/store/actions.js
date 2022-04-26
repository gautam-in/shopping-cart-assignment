import * as actionTypes from './actionTypes';

export const setUserLoggedInStatus = (isUserLoggedIn) => ({
    type: actionTypes.SET_USER_LOGGED_IN_STATUS,
    payload: isUserLoggedIn
});

export const loginUserRequest = (loginObj, navigate) => ({
    type: actionTypes.LOGIN_USER_REQUEST,
    payload: {loginObj, navigate}
});

export const loginUserResponse = () => ({
    type: actionTypes.LOGIN_USER_RESPONSE
});

export const registerUserRequest = (requestObj, navigate) => ({
    type: actionTypes.REGISTER_USER_REQUEST,
    payload: {requestObj, navigate}
});

export const registerUserResponse = (updatedUsers) => ({
    type: actionTypes.REGISTER_USER_RESPONSE,
    payload: updatedUsers
});

export const getBannersAndCategoriesRequest = () => ({
    type: actionTypes.GET_BANNERS_AND_CATEGORIES_REQUEST
});

export const getBannersAndCategoriesResponse = (banners, categories) => ({
    type: actionTypes.GET_BANNERS_AND_CATEGORIES_RESPONSE,
    payload: {banners, categories}
});

export const getProductsRequest = () => ({
    type: actionTypes.GET_PRODUCTS_REQUEST
});

export const getProductsResponse = (products) => ({
    type: actionTypes.GET_PRODUCTS_RESPONSE,
    payload: products
});

export const setCategoryFilter = (categoryId) => ({
    type: actionTypes.SET_CATEGORY_FILTER,
    payload: categoryId
});

export const addItemToCartRequest = (productId) => ({
    type: actionTypes.ADD_ITEM_TO_CART_REQUEST,
    payload: productId
});

export const addItemToCartResponse = (updatedCartItems) => ({
    type: actionTypes.ADD_ITEM_TO_CART_RESPONSE,
    payload: updatedCartItems
});

export const toggleCartModalView = () => ({
    type: actionTypes.TOGGLE_CART_MODAL_VIEW
});

export const updateCartQuanityByProduct = (productId, updaterType) => ({
    type: actionTypes.UPDATE_CART_QUANTITY_BY_PRODUCT,
    payload: {productId, updaterType}
});