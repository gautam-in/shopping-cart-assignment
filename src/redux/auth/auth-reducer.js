import * as authTypes from './auth-types';

const INITIAL_STATE = {
    isLogin: false
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case authTypes.LOGIN : 
         return {...state, isLogin: true};

         default: return state;
    }
    
}

export default authReducer;

