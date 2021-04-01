import actions from './index';
import constants from '../constants';
import urls from '../urls';
import {commonHeaders, checkHttpStatus} from '../utils';

export function getProducts(){
    return function(dispatch){
        dispatch({type:actions.GET_PRODUCT_DETAILS})
        const url = constants.base_api_url + urls.GET_PRODUCTS
        return fetch(url,{
            method:'GET',
            headers: {...commonHeaders,accept:'*'}
        })
        .then(checkHttpStatus)
        .then(jsonResponse => {
            dispatch({
                type: actions.GET_PRODUCT_DETAILS_SUCCESS,
                data: jsonResponse
            })
        })
        .catch(err=>{
            dispatch({
                type: actions.GET_PRODUCT_DETAILS_FAILURE,
                errorMsg: err
            })
        })
    }
}

export function addToCart(item){
    return function(dispatch){
        dispatch({type:actions.POST_CART_DATA});
        const url = constants.base_api_url + urls.ADD_TO_CART
        return fetch(url,{
            method:"POST",
            headers: {...commonHeaders},
            data:JSON.stringify(item.id)
        })
        .then(checkHttpStatus)
        .then(jsonResponse => {
            jsonResponse = {...jsonResponse,...{item:item}}
            dispatch({
                type: actions.POST_CART_DATA_SUCCESS,
                data: jsonResponse
            })
        })
        .catch(err=>{
            dispatch({
                type: actions.POST_CART_DATA_FAILURE,
                errorMsg: err
            })
        })
    }
}

export function resetCartReduxProcessData(){
    return function(dispatch){
        dispatch({
            type:actions.CART_PROCESS_RESET
        });
    }
}
export function resetCartData(){
    return function(dispatch){
        dispatch({
            type:actions.RESET_CART_DATA
        });
    }
}
