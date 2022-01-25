import {REGISTER, LOGGEDIN} from './actionTypes'

const INITIAL_STATE = {
    register: false,
    loggedIn: false,
    cartCount: 0
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER:
           return {
             ...state, register: true,
           };
        case LOGGEDIN:
           return {
              ...state, loggedIn: true
           };
        default: return state;
    }
};
export default reducer;