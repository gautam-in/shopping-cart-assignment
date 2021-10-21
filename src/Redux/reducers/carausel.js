import {actions} from '../actionTypes/actionConstants';

const initialState = {
    carauselItems: [],
}

export default function carauselReducer(state=initialState,action){
    switch(action.type){
        case actions.FETCH_CARAUSEL_ITEMS:
            return{
                ...state,
                carauselItems: action.payload,
            }
        default:
            return{
                ...state,
            }
    }
}