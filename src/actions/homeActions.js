import actions from './index';
import constants from '../constants';
import urls from '../urls';
import {commonHeaders, checkHttpStatus} from '../utils';

export function getOffers(){
    return function(dispatch){
        dispatch({type:actions.GET_BANNER_DETAILS})
        let url = constants.base_api_url + urls.GET_BANNER_DETAILS
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
                errorMsg: error
            })
        })
    }
}
export function getCategories(){
    return function(dispatch){
        dispatch({type:actions.GET_CATEGORY_DETAILS})
        let url = constants.base_api_url + urls.GET_CATEGORY_DETAILS
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
                errorMsg: error
            })
        })
    }
}
/*
export function getLaunchData(stateData){
    return function(dispatch,getState){
        dispatch({type:actions.GET_LAUNCH_DATA})
        let url = constants.base_api_url + constants.api_point + urls.GET_LAUNCH_DETAILS
        url+= '?limit='+constants.list_max;
        if(stateData){
            if(stateData.is_successful_launch){
                if(stateData.is_successful_launch == 'true'){
                    url+= '&launch_success='+stateData.is_successful_launch;
                } else {
                    url+= '&launch_success='+stateData.is_successful_launch;
                }
            }
            if(stateData.is_successful_land){
                if(stateData.is_successful_land == 'true'){
                    url+= '&land_success='+stateData.is_successful_land;
                } else {
                    url+= '&land_success='+stateData.is_successful_land;
                }
            }
            if(stateData.selected_launch){
                url+= '&launch_year='+stateData.selected_launch;
            }
        }
        // let vIndx = url.indexOf('v3');
        // let redirectUrl = url.substring(vIndx);
        return fetch(url, {
            method: 'GET',
            headers: {...commonHeaders,accept:'*'}
        })
        .then(checkHttpStatus)
        .then(response => {
            // dispatch(push('/'+redirectUrl));
            dispatch({
                type: actions.GET_LAUNCH_DATA_SUCCESS,
                data: response
            })
        })
        .catch(error => {
            dispatch({
                type: actions.GET_LAUNCH_DATA_FAILURE,
                errorMessage: error
            })
        })
    }
}
*/