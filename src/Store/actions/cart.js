import { actions } from "../actionTypes/constants"

export const openCloseCart = (payload) => {
    return {
        type: actions.OPEN_CLOSE_CART,
        payload
    }
}

export const updateCart = (payload, operation) => {
    return (dispatch, getState) =>{
        let allProducts = getState().product.allProducts;
        let existingProducts = getState()?.cartReducer?.cartItems || [];
        let product = allProducts.find(product => product.id === payload);
        let itemExists = existingProducts && existingProducts.find((product)=>{
           return  product && product.id === payload
        });
        let finalPayload = [];
         console.log(existingProducts)
        if(itemExists){
            finalPayload = existingProducts && existingProducts.map((product) => {
                if(product.id === payload){
                    operation === 'add' ?
                    product.count = product.count + 1:
                    product.count = product.count - 1;
                }
                return product;
            }).filter((item) => item.count)
        }else {
            finalPayload = [...existingProducts, {...product, count: 1}]
        }
        dispatch({
            type: actions.UPDATE_CART,
            payload: finalPayload
        })
        
    }
}