import actions from './index';

export function setUserDetails(data){
    return function(dispatch){
        dispatch({type:actions.SET_USER,data:data})
    }
}