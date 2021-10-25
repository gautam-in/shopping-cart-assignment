import {actions} from '../actionTypes/constants';

const initialState = {
    allProducts: [],
    productType: []
}

export default function product(state = initialState, action){
    switch(action.type){
        case actions.FETCH_PROD_TYPE: 
            return {...state, productType: action.payload}
        case actions.FETCH_ALL_PROD: 
            return {...state, allProducts: action.payload}
        default: return state
    }
}