const productsBuyReducer = (state = [], action) => {
    switch (action.type){
        case 'BUY_NOW':            
            return fooOne(state, action);
        case 'INCREMENT':            
            return incr(state, action.payload);
        case 'DECREMENT':            
            return decr(state, action.payload);
        default:
            return state;
    }
}

const fooOne = (state, action) => {      
    const existingProduct = state.find((productObj) => productObj.id === action.payload.id);  
    
    if(existingProduct === undefined){
        const newActionPayload = {...action.payload, quantity : 1}
        const newAction = {...action, payload : newActionPayload};
        return [...state, newAction.payload]
    } else {        
        const q = existingProduct.quantity;
        const newState = state.map((obj) => {
            if(obj.id === action.payload.id){
                return {...obj, quantity : q + 1}
            } 
            return obj;
        })       

        return newState;
    }       
}

const incr = (state, productID) => {
    const existingProduct = state.find((productObj) => productObj.id === productID); 

    const q = existingProduct.quantity;
    const newState = state.map((obj) => {
        if(obj.id === productID){
            return {...obj, quantity : q + 1}
        } 
        return obj;
    })       

    return newState;
}


const decr = (state, productID) => {
    const existingProduct = state.find((productObj) => productObj.id === productID); 

    const q = existingProduct.quantity;
    const newState = state.map((obj) => {
        if(obj.id === productID){
            return {...obj, quantity : q - 1}
        } 
        return obj;
    })       

    return newState;
}

export default productsBuyReducer;