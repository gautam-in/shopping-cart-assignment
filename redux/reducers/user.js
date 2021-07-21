import * as t from '../types'

const defaultState = {
        name:'guest',
        cart:[]
}

const user = (state=defaultState,action)=>{
    switch(action.type){
        case t.SET_USER:
            return action.payload
        default:
            return state
    }
}

export default user