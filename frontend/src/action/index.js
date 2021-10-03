
export const addProduct = (productDetail)=>{
    return{
        type:'ADD_PRODUCT',
        payload :{
            ...productDetail,
            quantity:1
        }

    }
}

export const removeProduct = (productDetail)=>{
    return{
        type:'REMOVE_PRODUCT',
        payload :productDetail

    }
}

export const reduceQuantity = (payload)=>{
    return{
        type:'REDUCE_QUANTITY',
        payload
    }
}

export const addQuantity = (payload)=>{
    return{
        type:'ADD_QUANTITY',
        payload
    }
}