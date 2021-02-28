import actions from '../actions/index';
const initialState = {
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
      
        default: {
            return state;
        }
    }
}