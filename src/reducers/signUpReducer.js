import actions from '../actions/index';
const initialState = {
 error: null,
 userData: null
};

export default function signUpReducer(state = initialState, action){
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
        default: {
            return state;
        }
    }
}