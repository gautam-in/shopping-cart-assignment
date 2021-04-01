import actions from './index';
import constants from '../constants';
import urls from '../urls';
import {commonHeaders, checkHttpStatus} from '../utils';

export function getOffers(){
    return function(dispatch){
        dispatch({type:actions.GET_BANNER_DETAILS})
        const url = constants.base_api_url + urls.GET_BANNER_DETAILS
        return fetch(url,{
            method:'GET',
            headers: {...commonHeaders,accept:'*'}
        })
        .then(checkHttpStatus)
        .then(jsonResponse => {
            dispatch({
                type: actions.GET_BANNER_DETAILS_SUCCESS,
                data: jsonResponse
            })
        })
        .catch(err=>{
            dispatch({
                type: actions.GET_BANNER_DETAILS_FAILURE,
                errorMsg: err
            })
        })
    }
}
export function getCategories(){
    return function(dispatch){
        dispatch({type:actions.GET_CATEGORY_DETAILS})
        const url = constants.base_api_url + urls.GET_CATEGORY_DETAILS
        return fetch(url,{
            method:'GET',
            headers: {...commonHeaders,accept:'*'}
        })
        .then(checkHttpStatus)
        .then(jsonResponse => {
            dispatch({
                type: actions.GET_CATEGORY_DETAILS_SUCCESS,
                data: jsonResponse
            })
        })
        .catch(err=>{
            dispatch({
                type: actions.GET_CATEGORY_DETAILS_FAILURE,
                errorMsg: err
            })
        })
    }
}
