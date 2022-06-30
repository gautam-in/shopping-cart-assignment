export const productReducer = (state, action) => {
    switch(action.type){
        case "GET_PRODUCTS_DATA": {
            return {...state, productsData: action.payload, serverData: action.payload } 
        }
        case "SET_PRODUCTS_DATA" : {
            return {...state, productsData: action.payload }
        }
        case "SET_CATEGORY_DATA" : {
            return {...state, categoryData: action.payload }
        }
        case "SET_CATEGORY_VALUE" : {
            return {...state, categoryValue: action.payload}
        }
        default : {
            return state
        }
    }
}