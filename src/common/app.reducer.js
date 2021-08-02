import { FETCH_USER_REQUEST, LOGOUT_USER } from './app.actionTypes'
const initialState = {
    userData: {},
    error: ''
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                userData: action.payload,
                error: ''
            }

        case LOGOUT_USER:
            return {
                ...state,
                userData: {},
                error: ''
            }
        
        default:
            return {
                ...state
            }    
    }    
}
