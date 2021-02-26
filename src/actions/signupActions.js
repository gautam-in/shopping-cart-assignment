import actions from './index';
import constants from '../constants';
import urls from '../urls';
import {commonHeaders, checkHttpStatus} from '../utils';

export function setUserDetails(data){
    return function(dispatch){
        dispatch({type:actions.SET_USER,data:data})
    }
}