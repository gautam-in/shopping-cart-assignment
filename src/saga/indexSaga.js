import { put, takeEvery, call } from "redux-saga/effects";
import {successCarouselDetails, successCategoryDetails, successProductDetails, successCartDetails} from "../store/actions";
import * as actionType from "../store/actionType";
import axios from 'axios';

function getCarouselData () {
    let carouselData = axios.get("/server/banners/index.get.json")
    .then( response => {
        return response.data;
    })
    .catch( err => {
        console.log('Fetch Error', err);
    });
    return carouselData;
}
function getCategoryData () {
    let categoryData = axios.get("/server/categories/index.get.json")
    .then( response => {
        return response.data.filter(function(x) { return x.enabled==true });
    })
    .catch( err => {
        console.log('Fetch Error', err);
    });
    return categoryData;
}
function getProductData () {
    let categoryData = axios.get("/server/products/index.get.json")
    .then( response => {
        return response.data;
    })
    .catch( err => {
        console.log('Fetch Error', err);
    });
    return categoryData;
}
function getCartData () {
    let cartData = axios.get("/server/addToCart/index.post.json")
    .then( response => {
       alert(response.data.responseMessage);
    })
    return cartData;
}

function* setHome(action){
    switch(action.type){
        case actionType.GET_CAROUSEL_DATA:
            let homeCarouselData = yield call(getCarouselData);
            yield put(successCarouselDetails(homeCarouselData));
            break;
        case actionType.GET_CATEGORY_DATA:
            let homeCategoryData = yield call(getCategoryData);
            yield put(successCategoryDetails(homeCategoryData));
            break;
        case actionType.GET_PRODUCT_DATA:
            let productData = yield call(getProductData);
            yield put(successProductDetails(productData));
            break;
        case actionType.GET_FILTERED_PRODUCT_DATA:
            let cartData = yield call(getCartData);
            yield put(successCartDetails(action.data, action.count));
            break;
            
    }
}

function* indexSaga() {
    yield takeEvery(
        [
            actionType.GET_CAROUSEL_DATA,
            actionType.GET_CATEGORY_DATA,
            actionType.GET_PRODUCT_DATA,
            actionType.GET_FILTERED_PRODUCT_DATA
        ],
        setHome
    )
}

export default indexSaga;