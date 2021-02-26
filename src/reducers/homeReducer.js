import actions from '../actions/index';
const initialState = {
//  error: null,
//  products_data: [],
//  productdata_searching_failed: false,
//  productdata_searching_success: false,
//  productdata_searching: false,
//  categoryData: [],
//  categorydata_searching_failed: false,
//  categorydata_searching_success: false,
//  categorydata_searching: false,
 bannerData: [],
 bannerdata_searching_failed: false,
 bannerdata_searching_success: false,
 bannerdata_searching: false,
 categoryData: [],
 categorydata_searching_failed: false,
 categorydata_searching_success: false,
 categorydata_searching: false
};

export default function homeApis(state = initialState, action){
    switch(action.type){
        case actions.RESET_BANEER_STATE:{
            return initialState
        }
        case actions.GET_BANNER_DETAILS:{
            let tempObj = {
                bannerdata_searching_failed: false,
                bannerdata_searching_success: false,
                bannerdata_searching: true,
            };
            return {...state,...tempObj}
        }
        case actions.GET_BANNER_DETAILS_SUCCESS:{
            let tempObj = {
                bannerData: action.data,
                bannerdata_searching_failed: false,
                bannerdata_searching_success: true,
                bannerdata_searching: false,
            };
            return {...state,...tempObj}
        }
        case actions.GET_BANNER_DETAILS_FAILURE:{
            let tempObj = {
                bannerdata_searching_failed: true,
                bannerdata_searching_success: false,
                bannerdata_searching: false,
                error: action.errorMsg
            };
            return {...state,...tempObj}
        }
        case actions.GET_CATEGORY_DETAILS:{
            let tempObj = {
                categorydata_searching_failed: false,
                categorydata_searching_success: false,
                categorydata_searching: true
            }
            return {...state,...tempObj}
        }
        case actions.GET_CATEGORY_DETAILS_SUCCESS:{
            let tempObj = {
                categoryData: action.data,
                categorydata_searching_failed: false,
                categorydata_searching_success: true,
                categorydata_searching: false
            }
            return {...state,...tempObj}
        }
        case actions.GET_CATEGORY_DETAILS_FAILURE:{
            let tempObj = {
                categorydata_searching_failed: true,
                categorydata_searching_success: false,
                categorydata_searching: false,
                error: action.errorMsg
            }
            return {...state,...tempObj}
        }
       /* case actions.GET_LAUNCH_DATA:{
            let tempObj = {
                launchdata_searching: true,
                launchdata_searching_failed: false,
                launchdata_searching_success: false,
                error: false
            };
            return {...state,...tempObj}
        }
        case actions.GET_LAUNCH_DATA_SUCCESS:{
            let tempObj = {
                launchdata_searching: false,
                launchdata_searching_failed: false,
                launchdata_searching_success: true,
                launch_data: action.data
            };
            return {...state,...tempObj}
        }
        case actions.GET_LAUNCH_DATA_FAILURE:{
            let tempObj = {
                launchdata_searching: false,
                launchdata_searching_failed: true,
                launchdata_searching_success: false,
                error: action.errorMessage
            };
            return {...state,...tempObj}
        }*/
        default: {
            return state;
        }
    }
}