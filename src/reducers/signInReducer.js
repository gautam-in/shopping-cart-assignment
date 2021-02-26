import actions from '../actions/index';
const initialState = {
 error: null,
 userData: null
};

export default function signInReducer(state = initialState, action){
    switch(action.type){
        case actions.RESET_STATE:{
            return initialState
        }
        case actions.SET_USER:{
            let tempObj = {
                userData: action.data
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